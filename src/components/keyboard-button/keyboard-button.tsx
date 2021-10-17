import { Feather as Icon } from '@expo/vector-icons';
import React from 'react';
import {
  Dimensions,
  TextStyle, ViewStyle
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { color, spacing } from '../../themes';
import { Text } from '../text/text';
const screenWidth = Dimensions.get('screen').width;
const buttonWidth = (screenWidth - 32) / 5;

const BUTTON: ViewStyle = {
  padding: spacing[3],
  width: buttonWidth,
  borderRadius: buttonWidth / 2,
  height: buttonWidth - 10,
  justifyContent: 'center',
};

const LABEL: TextStyle = {
  fontSize: 24,
  textAlign: 'center',
  color: color.text,
};

interface KeyboardButtonProps {
  label: string;
  onPress: (value: string) => void;
  isDeleted?: boolean;
  disabled?: boolean;
}

export const KeyboardButton = ({
  label,
  onPress,
  isDeleted = false,
}: KeyboardButtonProps) => {
  return (
    <TouchableOpacity onPress={() => onPress(label)} style={BUTTON}>
      {isDeleted ? (
        <Text style={{textAlign: 'center'}}>
          <Icon name="delete" size={24} />
        </Text>
      ) : (
        <Text style={LABEL}>{label}</Text>
      )}
    </TouchableOpacity>
  );
};
