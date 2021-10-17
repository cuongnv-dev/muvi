import { color, radius, typography } from '@themes';
import { TextStyle, ViewStyle } from 'react-native';

/**
 * All text will start off looking like this.
 */
const BASE_VIEW: ViewStyle = {
  height: 40,
  borderRadius: radius.s,
  justifyContent: 'center',
  alignItems: 'center',
};

const BASE_TEXT: TextStyle = {
  color: '#202123',
  fontSize: 17,
  fontFamily: typography.medium,
};

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const viewPresets: Record<string, ViewStyle> = {
  /**
   * A smaller piece of secondard information.
   */
  primary: { ...BASE_VIEW, backgroundColor: color.primary } as ViewStyle,

  outline: {
    ...BASE_VIEW,
    backgroundColor: color.transparent,
    borderColor: color.dim,
    borderWidth: 1,
  } as ViewStyle,
};

export const textPresets: Record<ButtonPresetNames, TextStyle> = {
  primary: {
    ...BASE_TEXT,
  } as TextStyle,
  outline: {
    ...BASE_TEXT,
    color: color.text,
  } as TextStyle,
};

/**
 * A list of preset names.
 */
export type ButtonPresetNames = keyof typeof viewPresets;
