import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { MainNavigator } from './mainNavigator';

export type RootStackParamList = {
  mainNavigator: undefined;
  authorize: undefined;
  unAuthorize: undefined;
};
// & Partial<UnAuthorizeParamsList> &
//   Partial<AuthorizeParamsList>;

const RootStack = createStackNavigator<RootStackParamList>();

export const RootNavigation = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      {/* <RootStack.Screen
        options={{ animationTypeForReplace: 'pop', gestureEnabled: false }}
        name='unAuthorize'
        component={AuthNavigator}
      /> */}

      {/* <RootStack.Screen
        options={{ gestureEnabled: false }}
        name='authorize'
        component={MainNavigator}
      /> */}
      <RootStack.Screen
        options={{ gestureEnabled: false }}
        name='mainNavigator'
        component={MainNavigator}
      />
    </RootStack.Navigator>
  );
};
