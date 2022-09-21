import * as React from 'react';
import { Provider } from 'react-redux'
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import store from './src/globalReducer';
import { navigationRef } from './src/RootNavigation';

import Home from "./src/screens/Home";
import Login from "./src/screens/Login";

const Stack = createNativeStackNavigator();

const accessToken = async () => {
  try {
    const value = await AsyncStorage.getItem('@access_token')
    if(value !== null) {
      return value;
    }
    return false
  } catch(e) {
    console.log(e);
    return false
  }
}
function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator
            initialRouteName="Home"
          >
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}

export default App;