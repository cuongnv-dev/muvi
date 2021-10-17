import { color } from '@themes';
import React from 'react';
import { View } from 'react-native';
import { MuviHeader } from '../MuviHeader/MuviHeader';
import { Screen } from '../screen/screen';

interface TabScreenProps {
  preset?: 'scroll' | 'fixed';
  children?: React.ReactNode;
}

export const TabScreen = ({ children, preset = 'fixed' }: TabScreenProps) => {
  return (
    <View style={{ flex: 1, backgroundColor: color.background }}>
      <Screen preset={preset} header={<MuviHeader />}>
        {children}
      </Screen>
    </View>
  );
};
