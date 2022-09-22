import React from 'react';
import {
  Text, Box, Button
} from 'native-base';

const Home = (props) => {
  const {
    navigation
  } = props

  return (
    <Box>
      <Text>
        This is home
      </Text>
      <Button
        onPress={() => navigation.navigate("Login", {})}
      >
        Logout
      </Button>
    </Box>
  );
};
export default Home;

// navigationRef.navigate(name, params);