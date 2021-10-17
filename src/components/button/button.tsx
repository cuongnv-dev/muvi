import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from '../text/text';
import { textPresets, viewPresets } from './button.presets';
import { ButtonProps } from './button.props';

/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 */
export function Button(props: ButtonProps) {
  // grab the props
  const {
    preset = 'primary',
    text,
    tx,
    style: styleOverride,
    textStyle: textStyleOverride,
    children,
    loading,
    ...rest
  } = props;

  const viewStyle = viewPresets[preset] || viewPresets.primary;
  const viewStyles = [viewStyle, styleOverride];
  const textStyle = textPresets[preset] || textPresets.primary;
  const textStyles = [textStyle, textStyleOverride];

  const content = children || <Text style={textStyles} text={text} tx={tx} />;
  return (
    <TouchableOpacity
      onPress={rest.onPress}
      {...rest}
      style={[viewStyles, { opacity: rest.disabled ? 0.5 : 1 }]}
    >
      {content}
    </TouchableOpacity>
  );
}
