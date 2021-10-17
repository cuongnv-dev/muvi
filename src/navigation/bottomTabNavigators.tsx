import { BottomTabIconButton } from '@components';
import MyListScreen from '@features/myList/MyListScreen';
import { SearchMovieScreen } from '@features/movieSearch/screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TransitionPresets } from '@react-navigation/stack';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HomeScreen } from '../features/home/screens';
import { ProfileScreen } from '../features/profile/screens/profileScreen';
import { color } from '../themes';

export type BottomTabParamList = {
  home: undefined;
  searching: undefined;
  list: undefined;
  profile: undefined;
};

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const insets = useSafeAreaInsets();
  const bottomBarHeight = insets.bottom !== 0 ? 70 : 55;
  const { t } = useTranslation();
  return (
    <BottomTab.Navigator
      initialRouteName='home'
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: bottomBarHeight,
          borderTopWidth: 1,
          borderTopColor: '#202123',
          position: 'absolute',
          backgroundColor: '#202123',
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: color.primary,
        tabBarInactiveTintColor: color.dim,
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <BottomTab.Screen
        name='home'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) =>
            BottomTabIconButton({
              color: color,
              icon: 'home',
            }),
        }}
      />
      <BottomTab.Screen
        name='searching'
        component={SearchMovieScreen}
        options={{
          tabBarIcon: ({ color }) =>
            BottomTabIconButton({
              color: color,
              icon: 'search',
            }),
        }}
      />

      <BottomTab.Screen
        name='list'
        component={MyListScreen}
        options={{
          tabBarIcon: ({ color }) =>
            BottomTabIconButton({
              color: color,
              icon: 'folder',
            }),
        }}
      />
      <BottomTab.Screen
        name='profile'
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) =>
            BottomTabIconButton({
              color: color,
              icon: 'grid',
            }),
        }}
      />
    </BottomTab.Navigator>
  );
}
