import { Feather as Icon } from '@expo/vector-icons';
import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
interface BottomTabIconButtonProps {
  color: string;
  icon: string;
}

export const BottomTabIconButton = ({
  color,
  icon,
}: BottomTabIconButtonProps) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        top: insets.bottom !== 0 ? 12 : 3,
      }}
    >
      <Icon name={icon as any} color={color} size={22} />
    </View>
  );
};
