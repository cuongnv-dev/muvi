import { backdrop_path, screenWidth } from '@common';
import { Text } from '@components';
import { MovieDetail } from '@models';
import { color, radius, spacing } from '@themes';
import { getRuntime } from '@utils/method';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

interface MyListItemProps {
  movie: MovieDetail;
}

export const MyListItem = ({ movie }: MyListItemProps) => {
  let genres = movie.genres.reduce((genres, genre, index) => {
    return (genres += `${genre.name}, `);
  }, '');
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: `${backdrop_path}${movie.backdrop_path}` }}
        style={styles.backdrop}
      />
      <View style={styles.content}>
        <Text
          text={movie.title}
          preset='medium'
          numberOfLines={2}
          style={{ fontSize: 15 }}
        />
        <View style={styles.runtimeRow}>
          <Text
            text={getRuntime(movie.runtime)}
            style={{ fontSize: 12, color: color.palette.maskText }}
          />
          <Text text='HD' style={styles.hdBox} />
        </View>

        <Text
          text={genres.slice(0, -1)}
          preset='secondary'
          numberOfLines={2}
          style={{ marginTop: spacing[2], fontSize: 12 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth - 32,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing[3],
  },
  backdrop: {
    width: (screenWidth - 80) / 2,
    height: 100,
    resizeMode: 'cover',
    borderRadius: radius.m,
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    height: 100,
    paddingLeft: spacing[2],
  },
  runtimeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing[1],
  },
  hdBox: {
    marginLeft: spacing[2],
    padding: 2,
    borderRadius: 3,
    borderWidth: 1,
    fontSize: 10,
    color: color.palette.maskText,
    borderColor: color.palette.maskText,
  },
});
