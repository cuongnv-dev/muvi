import { FieldError } from "react-hook-form";
import { StyleProp, TextInputProps, ViewStyle } from "react-native"

export interface InputFieldProps extends TextInputProps {
  name: string

  /**
   * React hook form error
   */
  error?: FieldError

  /**
   * React hook form control
   */
  control: any

  /**
   * Input label
   */
  title?: string

  /**
   * Input ref
   */
  forwardedRef?: any

  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>

  /**
   * Default value for input
   */
  defaultValue?: string

  /**
   * Mark text input is password field
   */
  isPassword?: boolean

  rightIcon?: string
}
