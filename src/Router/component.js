import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home'
import Login from '../screens/Login'
import { navigationRef } from '../RootNavigation';

const Stack = createNativeStackNavigator();

const Router = ({
    //data
    accessToken,
    //action
    handleCheckAccessToken,
}) => {
    useEffect(() => {
        handleCheckAccessToken()
    });
    
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator
                initialRouteName="Home"
            >
                {
                    (!accessToken) ? 
                    (
                        <>
                            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                        </>
                    ) : 
                    (
                        <>
                            <Stack.Screen name="Home" component={Home} />
                        </>
                    )
                }
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Router;