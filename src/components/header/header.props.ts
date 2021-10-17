import { StyleProp, TextStyle, ViewStyle } from "react-native"


export interface HeaderProps {
  /**
   * header non-i18n
   */
  headerText?: string

  /**
   * Icon that should appear on the left
   */
  leftIcon?: string

  /**
   * What happens when you press the left icon
   */
  onLeftPress?(): void

  /**
   * Icon that should appear on the right
   */
  rightIcon?: string

  /**
   * What happens when you press the right icon
   */
  onRightPress?(): void

  /**
   * Title style overrides.
   */
  titleStyle?: StyleProp<TextStyle>
}
