import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from '../screens/Splash'
import Home from '../screens/Home'
import Login from '../screens/Login'
import { navigationRef } from '../RootNavigation';

const Stack = createNativeStackNavigator();

const Router = ({
    //datas
    accessToken,
    isSplashShow,
    //actions
    handleCheckAccessToken,
}) => {
    useEffect(() => {
        handleCheckAccessToken()
    });

    if(isSplashShow){
        return (
            <>
                <Splash />
            </>
        )
    }
    
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator
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