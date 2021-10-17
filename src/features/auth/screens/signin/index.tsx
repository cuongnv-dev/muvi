import { images } from '@assets/images';
import { scale } from '@common';
import { Button, InputField, Text } from '@components';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginParams } from '@models';
import { StackScreenProps } from '@react-navigation/stack';
import { appActions, useAppDispatch } from '@store';
import { color, radius, spacing } from '@themes';
import React, { FC, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as yup from 'yup';
import { AuthParamList } from '../../authNavigator';

const schema = yup.object().shape({
  phoneNumber: yup.string().required('Phone number cannot empty'),
  password: yup.string().required('Password cannot empty'),
});

export const SignInScreen: FC<StackScreenProps<AuthParamList, 'signin'>> = ({
  navigation,
  route,
}) => {
  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<LoginParams>({
    resolver: yupResolver(schema),
  });
  const passwordRef = useRef<TextInput>(null);
  const dispatch = useAppDispatch();
  const insets = useSafeAreaInsets();
  const { t, i18n } = useTranslation();

  const onSubmit = async ({ email, password }: LoginParams) => {
    // phoneNumber = `${code.tel_code}${phoneNumber}`;
    // try {
    //   dispatch(appActions.onStartProcess(translate('label:loading')));
    //   const res = await authApi.login({ phoneNumber, password });
    //   dispatch(appActions.onEndProcess());
    //   if (res.success && res.data) {
    //     dispatch(authActions.loginSuccess(res));
    //   } else {
    //     toastError('Invalid username or password');
    //   }
    // } catch (error: any) {
    //   dispatch(appActions.onEndProcess());
    //   toastError(translate('error:globalError'));
    //   console.log('error', error?.response?.data);
    // }
  };

  const goToHome = () => {
    navigation.replace('main' as never, {} as never);
  };

  const goToSignUp = () => {
    console.log('ahs');
    navigation.navigate('signup');
  };

  return (
    <KeyboardAvoidingView style={styles.wrapper} behavior='padding'>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Image source={images.background} style={{ width: '100%' }} />
          <View
            style={[
              styles.content,
              {
                paddingTop: insets.top + 10,
                paddingBottom: insets.bottom + 10,
              },
            ]}
          >
            <View style={styles.header}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={images.logo} style={{}} />
                <Text text='Muvi' preset='bold' style={styles.logo} />
              </View>
              <TouchableOpacity onPress={goToSignUp}>
                <Text tx='button:register' style={{ color: color.primary }} />
              </TouchableOpacity>
            </View>
            <View style={styles.form}>
              <Text
                tx='button:login'
                preset='bold'
                style={{ fontSize: 22, marginBottom: spacing[5] }}
              />
              <InputField
                control={control}
                name='email'
                rightIcon='mail'
                error={errors.email}
                returnKeyType='next'
                returnKeyLabel='next'
                placeholder={t('placeholder:email')}
                onSubmitEditing={() => passwordRef.current?.focus()}
              />
              <InputField
                forwardedRef={passwordRef}
                control={control}
                name='password'
                error={errors.password}
                returnKeyType='next'
                returnKeyLabel='next'
                isPassword={true}
                placeholder={t('placeholder:password')}
                // onSubmitEditing={() => phoneRef.current?.focus()}
              />
              <TouchableOpacity
                style={{ alignSelf: 'flex-end', marginTop: spacing[3] }}
              >
                <Text tx='button:forgotPassword' preset='secondary' />
              </TouchableOpacity>
              <Text
                tx='label:orContinueWith'
                preset='secondary'
                style={{ marginTop: spacing[4] }}
              />
              <View style={styles.socialRow}>
                <TouchableOpacity style={styles.socialButton}>
                  <Image source={images.google} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                  <Image source={images.facebook} />
                </TouchableOpacity>
              </View>
            </View>
            <Button text='Login' onPress={goToHome} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    height: '100%',
    backgroundColor: color.background,
  },
  container: {
    flex: 1,
    position: 'relative',
  },
  content: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: spacing[4],
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: 32,
    marginLeft: spacing[2],
  },
  form: {
    flex: 0.7,
    justifyContent: 'center',
  },
  socialRow: {
    flexDirection: 'row',
    marginTop: spacing[2],
  },
  socialButton: {
    marginRight: spacing[4],
    width: scale(44),
    height: scale(44),
    backgroundColor: color.palette.shark,
    borderRadius: radius.m,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
