import { TextStyle } from "react-native";
import { color, typography } from "@themes";

/**
 * All text will start off looking like this.
 */
const BASE: TextStyle = {
  fontFamily: typography.primary,
  color: color.text,
  fontSize: 16,
};

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const presets = {
  /**
   * The default text styles.
   */
  default: BASE,

  secondary: { ...BASE, color: color.dim } as TextStyle,

  /**
   * A bold version of the default text.
   */
  bold: {
    ...BASE,
    fontSize: 20,
    fontFamily: typography.bold,
    color: color.text,
  } as TextStyle,

  /**
   * A medium version of the default text.
   */
  medium: { ...BASE, fontFamily: typography.medium, fontSize: 17 } as TextStyle,

  /**
   * Large headers.
   */
  header: {
    ...BASE,
    fontSize: 24,
    fontFamily: typography.semiBold,
    color: color.palette.text,
  } as TextStyle,

  /**
   * Field labels that appear on forms above the inputs.
   */
  fieldLabel: { ...BASE, fontSize: 13, color: color.dim } as TextStyle,

  /**
   * Form error message.
   */
  error: { ...BASE, fontSize: 12, color: color.error } as TextStyle,
};

/**
 * A list of preset names.
 */
export type TextPresets = keyof typeof presets;
