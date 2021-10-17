import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { scale } from '@common';
import { color, spacing } from '@themes';
import { Text } from '@components';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch } from '@store';

interface ButtonTileProps {
  title: string;
  icon: any;
  link: string;
  onPress?: () => void;
}

const ButtonTile = ({ title, icon, link, onPress }: ButtonTileProps) => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const handleNavigate = () => {
    if (!onPress) {
      navigation.navigate(link as never);
    } else {
      onPress();
    }
  };
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.left}>
        <View style={styles.iconContainer}>
          <Icon name={icon} size={scale(20)} color={color.palette.maskText} />
        </View>
        <Text text={title} preset='medium' />
      </View>
      <Icon
        name='chevron-right'
        size={22}
        color={color.palette.secondaryText}
      />
    </TouchableOpacity>
  );
};

export default ButtonTile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: scale(36),
    height: scale(36),
    backgroundColor: color.palette.shark,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing[5],
  },
});
