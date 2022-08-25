import { Box, Button, Heading, Text } from 'native-base';
import React from 'react';
import { Points } from '../../types/types';

export default function Result(points: Points) {
  return (
    <Box textAlign="center">
      <Heading size='xl'>
        {points.hits === 5
          ? 'CONGRATULATIONS!!!!! New record.'
          : `Your points: ${points.hits}`}
      </Heading>
      <Text>✅Right Questions: {points.hits}</Text>
      <Text>❌Wrong Questions: {points.misses}</Text>
      <Button href="/questions" mt={4}>RESTART</Button>
    </Box>
  );
}
