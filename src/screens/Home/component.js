import React from 'react';
import {
  Text, Box, Button
} from 'native-base';

const Home = (props) => {
  const {
    navigation,
    handleRemoveAccessToken,
  } = props

  return (
    <Box>
      <Text>
        This is home
      </Text>
      <Button
        onPress={() => handleRemoveAccessToken()}
      >
        Logout
      </Button>
    </Box>
  );
};
export default Home;

// navigationRef.navigate(name, params);