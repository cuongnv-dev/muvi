import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

interface LinearBackgroundProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export const LinearBackground = ({children, style}: LinearBackgroundProps) => {
  return (
    <LinearGradient style={style} colors={['#E4DBC0', '#C2A059']}>
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({});
