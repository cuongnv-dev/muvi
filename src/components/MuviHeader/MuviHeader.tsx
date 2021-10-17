import { images } from '@assets/images';
import { scale } from '@common';
import { Ionicons } from '@expo/vector-icons';
import { color, radius, spacing } from '@themes';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from '../text/text';

export const MuviHeader = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <TouchableOpacity style={styles.avatarContainer}>
          <Image source={images.logo} style={styles.avatar} />
        </TouchableOpacity>
        <Text text='Muvi' preset='bold' style={styles.logo} />
      </View>
      <View style={styles.headerLeft}>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons
            name='notifications-outline'
            size={scale(22)}
            color={color.text}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing[4],
    paddingBottom: spacing[3],
    // borderWidth: 1,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 47,
    height: 35,
    borderRadius: radius.m,
  },
  welcome: {
    marginLeft: spacing[2],
  },
  iconButton: {
    width: scale(38),
    height: scale(38),
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: spacing[3],
  },
  logo: {
    fontSize: 26,
    marginLeft: spacing[2],
  },
});
