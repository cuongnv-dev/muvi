import { StyleProp, TextProps as TextProperties, TextStyle } from "react-native"
import { TextPresets } from "./text.presets"
// import { TxKeyPath } from "../../i18n"

export interface TextProps extends TextProperties {
  /**
   * Children components.
   */
  children?: React.ReactNode;

  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string;

  /**
   * The translation key.
   */
  tx?: string;

  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<TextStyle>;

  /**
   * One of the different types of text presets.
   */
  preset?: TextPresets;
}
