import { AuthNavigator } from '@features/auth/authNavigator';
import MovieDetailScreen from '@features/movieDetail/MovieDetail';
import TVDetailScreen from '@features/tvDetail/TVDetail';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import BottomTabNavigator from '../navigation/bottomTabNavigators';

export type MainNavigatorParams = {
  authentication: undefined;
  main: undefined;
  movieDetail: { movieId: number };
  tvDetail: { tvId: number };
};

const Stack = createStackNavigator<MainNavigatorParams>();

export const MainNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='authentication'
      screenOptions={{ headerShown: false, gestureEnabled: true }}
    >
      <Stack.Screen name='authentication' component={AuthNavigator} />
      <Stack.Screen name='main' component={BottomTabNavigator} />
      <Stack.Screen name='movieDetail' component={MovieDetailScreen} />
      <Stack.Screen name='tvDetail' component={TVDetailScreen} />
    </Stack.Navigator>
  );
};
