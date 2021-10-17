import { emptyImages } from '@assets/images';
import { spacing } from '@themes';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Text } from '../text/text';

interface ListEmptyProps {
  title?: string;
  txTitle?: string;
  subTitle?: string;
  image: keyof typeof emptyImages;
}

export const ListEmpty = ({
  title,
  subTitle,
  image,
  txTitle,
}: ListEmptyProps) => {
  return (
    <View style={styles.emptyContainer}>
      <Image source={emptyImages[image]} />
      <Text preset='bold' text={title} tx={txTitle} />
      {subTitle && <Text text={subTitle} style={styles.notFoundText} />}
    </View>
  );
};

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    marginTop: spacing[8],
    justifyContent: 'center',
    alignItems: 'center',
  },
  notFoundText: {
    textAlign: 'center',
    marginTop: spacing[4],
    paddingHorizontal: spacing[4],
  },
});
