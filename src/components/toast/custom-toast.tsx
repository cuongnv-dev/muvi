import React from 'react';
import Toast, { BaseToast } from 'react-native-toast-message';
import { color, typography } from '@themes';
const icon = require('./assets/cancel.png');
const successIcon = require('./assets/done.png');

export const toastConfig = {
  error: ({ text1, props, type, ...rest }: any) => (
    <BaseToast
      {...rest}
      style={{
        borderLeftColor: color.error,
        backgroundColor: '#FCF5F5',
      }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        color: color.error,
        fontWeight: '300',
        fontFamily: 'Nunito-Regular',
      }}
      text1={text1}
      text2={props.uuid}
      leadingIcon={icon}
      text1NumberOfLines={2}
      text2NumberOfLines={2}
    />
  ),
  success: ({ text1, props, type, ...rest }: any) => (
    <BaseToast
      {...rest}
      style={{
        borderLeftColor: color.palette.green,
        backgroundColor: '#EAF7EE',
      }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        color: color.palette.green,
        fontWeight: '300',
        fontFamily: 'Nunito-Regular',
      }}
      text1={text1}
      text2={props.uuid}
      leadingIcon={successIcon}
      text1NumberOfLines={2}
      text2NumberOfLines={2}
    />
  ),
};
//nguyenvietcuong.dev@gmail.com
export const toastError = (message: string) => {
  Toast.show({
    type: 'error',
    position: 'top',
    topOffset: 50,
    visibilityTime: 3000,
    text1: message,
  });
};
//
export const toastSuccess = (message: string) => {
  Toast.show({
    type: 'success',
    position: 'top',
    topOffset: 50,
    visibilityTime: 3000,
    text1: message,
  });
};
