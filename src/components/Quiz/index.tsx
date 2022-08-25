import React from 'react';
import { Box, Heading, Pressable, Text } from 'native-base';
import { IQuestion } from '../../types/types';
import he from 'he';

const Quiz = ({ data, count, answers, handleChoice }: IQuestion) => {
  return (
    <>
      <Heading mb={100}>{he.decode(data?.results[count].question)}</Heading>

      <Box>
        {answers?.map((item: string, index: number) => {
          return (
            <Box key={index}>
              <Pressable
                _hover={{ bg: 'cyan.700' }}
                w={'2xl'}
                h={10}
                bg="cyan.400"
                flexDir="row"
                borderRadius={10}
                mb={3}
                alignItems="center"
                padding={7}
                onPress={() => handleChoice(item)}
              >
                <Text textTransform="uppercase" fontWeight="bold" color="white">
                  {index + 1}. {he.decode(item)}
                </Text>
              </Pressable>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default Quiz;
