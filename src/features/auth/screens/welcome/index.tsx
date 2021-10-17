import { images } from '@assets/images';
import { StackScreenProps } from '@react-navigation/stack';
import { color, spacing } from '@themes';
import React, { FC } from 'react';
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AuthParamList } from '../../authNavigator';
import { Button, Text } from '@components';

export const WelcomeScreen: FC<StackScreenProps<AuthParamList, 'welcome'>> = ({
  navigation,
}) => {
  const insets = useSafeAreaInsets();

  const goToHome = () => {
    navigation.replace('main' as never, {} as never);
  };

  const goToSignIn = () => {
    navigation.navigate('signin');
  };

  return (
    <View style={styles.wrapper}>
      <View
        style={[
          styles.header,
          {
            paddingTop: insets.top + 10,
          },
        ]}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={images.logo} style={{}} />
          <Text text='Muvi' preset='bold' style={styles.logo} />
        </View>
      </View>
      <View style={styles.content}>
        <Image source={images.welcomeImage} />
        <Text
          text='Welcome to Muvi'
          preset='bold'
          style={{ marginTop: spacing[6] }}
        />
        <Text
          text='Free movie streaming all your needs everytime and everywhere.'
          preset='secondary'
          style={styles.subTitle}
        />
      </View>
      <View style={styles.buttonRow}>
        <Button tx='button:watchMovie' onPress={goToHome} />
        <TouchableOpacity style={styles.loginButton} onPress={goToSignIn}>
          <Text tx='button:login' />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: color.background,
    justifyContent: 'space-between',
  },
  header: {
    backgroundColor: '#202123',
    paddingBottom: spacing[2],
    alignItems: 'center',
  },
  logo: {
    fontSize: 32,
    marginLeft: spacing[2],
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonRow: {
    paddingHorizontal: spacing[4],
    paddingBottom: spacing[6],
  },
  loginButton: {
    marginTop: spacing[3],
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subTitle: {
    textAlign: 'center',
    marginTop: spacing[3],
    paddingHorizontal: spacing[6],
  },
});
