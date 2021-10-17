import { Feather as Icon } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { color, spacing, typography } from '../../themes';
import { Text } from '../text/text';
import { InputFieldProps } from './inputField.props';

export const InputField = ({
  name,
  error,
  title,
  control,
  forwardedRef,
  style: styleOverlay,
  defaultValue,
  isPassword,
  rightIcon,
  placeholder,
  ...rest
}: InputFieldProps) => {
  const [showPwd, setShowPwd] = useState<boolean>(false);
  const [focused, setFocused] = useState<boolean>(false);
  const passwordIcon = showPwd ? 'eye' : 'eye-off';

  // consoel.log(c)
  const handleIconPress = () => {
    if (isPassword) {
      setShowPwd(!showPwd);
    }
  };

  const handleFocused = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  return (
    <View style={styles.wrapper}>
      {/* <Text text={title} style={styles.label} /> */}
      <View style={[styles.inputContainer]}>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              ref={forwardedRef}
              style={styles.input}
              onFocus={handleFocused}
              onBlur={handleBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              placeholder={placeholder}
              placeholderTextColor={color.label}
              defaultValue={defaultValue}
              secureTextEntry={isPassword && !showPwd}
              selectionColor={color.primary}
              {...rest}
            />
          )}
          name={name}
          rules={{ required: true }}
        />

        {isPassword ? (
          <TouchableOpacity style={styles.iconButton} onPress={handleIconPress}>
            <Icon size={20} name={passwordIcon} color={color.primary} />
          </TouchableOpacity>
        ) : (
          rightIcon && (
            <TouchableWithoutFeedback style={styles.iconButton}>
              <Icon size={20} name={rightIcon as any} color={color.primary} />
            </TouchableWithoutFeedback>
          )
        )}
      </View>
      <View style={styles.errorContainer}>
        {error && <Text text={error.message} preset='error' />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 15,
  },
  inputContainer: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    height: 44,
    borderBottomWidth: 1.1,
    borderBottomColor: 'rgba(255,255,255,0.12)',
  },
  input: {
    flex: 1,
    fontFamily: typography.primary,
    color: 'white',
    fontSize: 16,
  },
  label: {
    fontSize: 16,
  },

  errorContainer: {
    paddingTop: spacing[2],
  },
  iconButton: {},
});
