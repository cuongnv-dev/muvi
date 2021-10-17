import { images } from '@assets/images';
import { scale, verticalScale } from '@common';
import { BackHeader, Button, InputField, Text } from '@components';
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterParams } from '@models';
import { StackScreenProps } from '@react-navigation/stack';
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
  nickname: yup.string().required('Nickname cannot empty'),
});

export const SignUpScreen: FC<StackScreenProps<AuthParamList, 'signup'>> = ({
  navigation,
}) => {
  const insets = useSafeAreaInsets();

  const { t } = useTranslation();
  const {
    control,
    handleSubmit,
    formState: { isDirty, isValid, errors },
  } = useForm<RegisterParams>({
    resolver: yupResolver(schema),
  });
  const phoneRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  const onSubmit = (data: RegisterParams) => {
    console.log('data :>> ', data);
  };

  const goToHome = () => {
    navigation.replace('main' as never, {} as never);
  };

  return (
    <KeyboardAvoidingView style={styles.wrapper} behavior='padding'>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            paddingTop: insets.top,
            paddingBottom: insets.bottom + 10,
          }}
        >
          <BackHeader />
          <View style={styles.container}>
            <Text tx='label:createAccount' preset='bold' />
            <Text
              text='Enter infomation below or login with social account to get started'
              preset='secondary'
              style={styles.subTitle}
            />

            <View style={styles.form}>
              <InputField
                title={t('label:email')}
                control={control}
                name='email'
                rightIcon='mail'
                error={errors.email}
                // editable={false}
                returnKeyType='next'
                returnKeyLabel='next'
                placeholder={t('placeholder:email')}
                onSubmitEditing={() => passwordRef.current?.focus()}
              />
              <InputField
                forwardedRef={passwordRef}
                title={t('label:password')}
                control={control}
                name='password'
                error={errors.password}
                // editable={false}
                returnKeyType='next'
                returnKeyLabel='next'
                isPassword={true}
                placeholder={t('placeholder:password')}
                // onSubmitEditing={() => phoneRef.current?.focus()}
              />

              <Text
                tx='label:orContinueWith'
                preset='secondary'
                style={{ marginTop: spacing[6] }}
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
          </View>

          <Button
            tx='button:register'
            style={{ marginHorizontal: spacing[4] }}
            onPress={goToHome}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: color.background,
  },
  container: {
    paddingHorizontal: spacing[4],
    marginTop: spacing[4],
    flex: 1,
  },
  subTitle: {
    marginTop: spacing[4],
    fontSize: 14,
    marginRight: spacing[7],
  },
  form: {
    marginTop: spacing[4],
  },
  registerButton: {
    marginTop: verticalScale(25),
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
