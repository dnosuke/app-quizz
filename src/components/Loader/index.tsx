import { Box, Heading } from 'native-base';
import React from 'react';
//@ts-ignore
import * as C from 'svg-loaders-react';

const Loader = () => {
  return (
    <Box alignItems="center">
      <Heading size="xl" mb={4}>
        Loading
      </Heading>
      <C.ThreeDots fill="#3dd1eb" />
    </Box>
  );
};

export default Loader;
