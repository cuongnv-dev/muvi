import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { SignInScreen, SignUpScreen, WelcomeScreen } from './screens';

export type AuthParamList = {
  welcome: undefined;
  signin: undefined;
  signup: undefined;
};

const Stack = createStackNavigator<AuthParamList>();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: true }}
      initialRouteName='welcome'
    >
      <Stack.Screen name={'welcome'} component={WelcomeScreen} />

      <Stack.Screen name={'signin'} component={SignInScreen} />
      <Stack.Screen name={'signup'} component={SignUpScreen} />
    </Stack.Navigator>
  );
};
