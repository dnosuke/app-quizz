import { Box, Heading } from 'native-base';
import React from 'react';

const Loader = () => {
  return (
    <Box alignItems='center'>
      <Heading size="xl">
          Just one second 
      </Heading>
      <Heading size="xl">
          We are fetching that content for you.
      </Heading>
    </Box>
  );
};

export default Loader;