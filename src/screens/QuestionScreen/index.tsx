import { useEffect, useState } from 'react'
import { Data, Points } from '../../types/types';
import Question from '../../components/Question';
import axios from 'axios';
import { Box, Button, Heading, Image, Text, VStack } from 'native-base';


const url = `https://opentdb.com/api.php?amount=5&category=18`;

function QuestionScreen() {
  const [data, setData] = useState<Data>()
  const [count, setCount] = useState<number>(0)
  const [answers, setAnswers] = useState<string[]>()
  const [points, setPoints] = useState<Points>({ hits: 0, misses: 0 })
  
  useEffect(() => {
    const fetchSearch = async () => {
      const { data } = await axios.get(url);
      setData(data)
    };
    fetchSearch();
  },[])

  useEffect(() => {
    const ans = [...data?.results[count].incorrect_answers || []]
    ans.push(data?.results[count].correct_answer || '')
    setAnswers(ans.sort())

  }, [count, data])

  const handleChoice = (choice: string) => {
   return () => {
    if (choice === data?.results[count].correct_answer) {
      console.log('Parabens')
      let newpoints = { ...points, hits: points.hits + 1 }
      setPoints(newpoints)
      setCount(count + 1)
    } else {
      console.log('errouu')
      setCount(count + 1)
    }}
  }

  const handleCount = () => {
    setCount(count + 1);
  }

  return (
    <Box overflow="auto">
      <Box
      minHeight="100vh"
      justifyContent="center"
      px={4}
    >
      <VStack space={5} alignItems="center">
        <Heading size="lg" color="coolGray.900">Hits: {points.hits}</Heading>        
        <Box alignItems='center'>
          <Question
            data={data as Data}
            count={count}
            answers={answers as string[]}
            handleChoice={handleChoice}
          />

          <Button alignSelf='center' w={200} onPress={handleCount}>Pular</Button>
        </Box>
      </VStack>
    </Box>

      
    </Box>
  )
}

export default QuestionScreen;