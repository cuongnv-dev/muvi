import { images } from '@assets/images';
import { scale } from '@common';
import { Text } from '@components';
import { useNavigation } from '@react-navigation/native';
import { color, spacing } from '@themes';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

const UserCard = () => {
  const navigation = useNavigation();

  const goToAccountInfomation = () => {
    navigation.navigate('accountInfomation' as never);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.avatar} onPress={goToAccountInfomation}>
        <Image source={images.logo} style={styles.avatar} />
      </TouchableOpacity>

      <View style={{ marginLeft: spacing[4], justifyContent: 'center' }}>
        <Text text='Adam Johnson' preset='bold' />
        <Text text='adamJohnson@gmail.com' preset='secondary' />
      </View>
    </View>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: spacing[3],
  },
  avatar: {
    width: scale(50),
    height: scale(50),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
