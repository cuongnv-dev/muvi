import { verticalScale } from '@common';
import { Dialog, Screen } from '@components';
import { useAppDispatch } from '@store';
import { color, spacing } from '@themes';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import ButtonTile from '../components/ButtonTile';
import UserCard from '../components/UserCard';

export const ProfileScreen = () => {
  const { t, i18n } = useTranslation();

  return (
    <View style={styles.wrapper}>
      <Screen preset='fixed'>
        <UserCard />
        <View style={{ marginTop: verticalScale(28) }}>
          <ButtonTile
            link='accountInfomation'
            title={t('button:profile')}
            icon='user'
          ></ButtonTile>
          <ButtonTile
            link='changePassword'
            title={t('button:changePassword')}
            icon='key'
          ></ButtonTile>
          <ButtonTile
            link='myList'
            title={t('button:myList')}
            icon='folder'
          ></ButtonTile>
          <ButtonTile
            link='setting'
            title={t('button:setting')}
            icon='settings'
          ></ButtonTile>

          <ButtonTile
            link='shippingAddress'
            title={t('button:help')}
            icon='life-buoy'
          ></ButtonTile>

          <ButtonTile
            onPress={() => console.log('logout')}
            link='profile'
            title={t('button:signOut')}
            icon='log-out'
          ></ButtonTile>
        </View>
      </Screen>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: color.background,
    paddingHorizontal: spacing[4],
  },
});
