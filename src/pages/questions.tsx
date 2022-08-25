import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Center, Heading, Text, useColorMode, VStack } from "native-base";
import Question from "../components/Question";
import { Data, Points } from "../types/types";
import { ColorModeSwitch } from ".";
//import { ToggleDarkMode } from '../Home';

const url = `https://opentdb.com/api.php?amount=5&category=18`;

export default function QuestionScreen() {
  const [data, setData] = useState<Data>();
  const [count, setCount] = useState<number>(0);
  const [answers, setAnswers] = useState<string[]>();
  const [points, setPoints] = useState<Points>({ hits: 0, misses: 0 });
  const { colorMode } = useColorMode();

  useEffect(() => {
    const fetchSearch = async () => {
      const { data } = await axios.get(url);
      setData(data);
    };
    fetchSearch();
  }, []);

  useEffect(() => {
    if (count < 5) {
      const ans = [...(data?.results[count].incorrect_answers || [])];
      ans.push(data?.results[count].correct_answer || "");
      setAnswers(ans.sort());
    }
  }, [count, data]);

  const handleChoice = (choice: string) => {
    return () => {
      if (choice === data?.results[count].correct_answer) {
        console.log("Parabens");
        let newpoints = { ...points, hits: points.hits + 1 };
        setPoints(newpoints);
        setCount(count + 1);
      } else {
        console.log("errouu");
        setCount(count + 1);
      }
    };
  };

  return (
    <Center
      flex={1}
      _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "blueGray.50" }}
    >
      <Box
        minHeight="100vh"
        justifyContent="center"
        px={4}
        overflow="auto"
        bg={colorMode === "light" ? "coolGray.50" : "coolGray.900"}
      >
        <VStack space={5} alignItems="center">
          {data && count < 5 && (
            <Box alignItems="center">
              <Question
                data={data as Data}
                count={count}
                answers={answers as string[]}
                handleChoice={handleChoice}
              />
            </Box>
          )}

          {count === 5 ? (
            <Box textAlign="center">
              <Heading>
                {points.hits === 5
                  ? "CONGRATULATIONS!!!!! New record."
                  : `Your points: ${points.hits}`}
              </Heading>
              <Text>Hits: {points.hits}</Text>
              <Text>Misses: {points.misses}</Text>
            </Box>
          ) : null}
        </VStack>
      </Box>
      <ColorModeSwitch />
    </Center>
  );
}
