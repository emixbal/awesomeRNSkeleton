import React from 'react';

import {
  Box, Center, Heading,
} from 'native-base';


const Splash = (props) => {
  return (
    <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
          color: "warmGray.50"
        }}>
          Halooo
        </Heading>
        
      </Box>
    </Center>
  )
}

export default Splash;