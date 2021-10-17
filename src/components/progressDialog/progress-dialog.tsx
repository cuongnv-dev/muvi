import React, {
  createRef,
  forwardRef,
  memo,
  useCallback,
  useImperativeHandle,
  useState,
} from 'react';
import isEqual from 'react-fast-compare';
import {
  ActivityIndicator,
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';

const WRAPPER: ViewStyle = {
  justifyContent: 'center',
  backgroundColor: 'rgba(0,0,0,.5)',
  alignItems: 'center',
};

const CONTAINER: ViewStyle = {
  overflow: 'hidden',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 10,
  padding: 20,
  backgroundColor: 'white',
};

const ProgressDialogComponent = forwardRef((props, ref) => {
  useImperativeHandle(
    ref,
    () => ({
      show: (msg: string) => {
        setMessage(msg);
        setVisible(true);
      },
      hide: () => {
        setVisible(false);
      },
    }),
    [],
  );
  // state
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');

  // function
  const _onModalHide = useCallback(() => {
    setMessage('');
  }, []);

  // render
  return visible ? (
    <>
      <StatusBar translucent backgroundColor={'transparent'} />
      <View style={[StyleSheet.absoluteFillObject, WRAPPER]}>
        <View></View>
        <View style={CONTAINER}>
          <ActivityIndicator size="large" color={'#C2A059'} />
          {message && <Text>{message}</Text>}
        </View>
      </View>
    </>
  ) : null;
});

export const progressDialogRef = createRef<ProgressDialogRef>();
export const ProgressDialog = memo(
  () => <ProgressDialogComponent ref={progressDialogRef} />,
  isEqual,
);
export const showLoading = (msg = 'Loading') => {
  progressDialogRef.current?.show(msg);
};

export const hideLoading = () => {
  progressDialogRef.current?.hide();
};
export interface ProgressDialogRef {
  show(msg: string): void;
  hide(): void;
}
