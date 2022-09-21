import React from 'react';
import {
  Text, Box, Button
} from 'native-base';

const Home = (props) => {
  const {
    navigation, isLoading
  } = props

  return (
    <Box>
      <Text>
        This is home {isLoading ? "true" : "false"}
      </Text>
      <Button
        onPress={() => navigation.navigate("Login", {})}
      >
        Klik aku
      </Button>
    </Box>
  );
};
export default Home;

// navigationRef.navigate(name, params);