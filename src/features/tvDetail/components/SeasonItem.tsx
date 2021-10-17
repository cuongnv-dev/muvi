import { backdrop_path, scale, screenWidth } from '@common';
import { Season } from '@models';
import { color, radius, spacing } from '@themes';
import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Text } from '@components';

interface SeasonItemProps {
  season: Season;
}

const SeasonItem = ({ season }: SeasonItemProps) => {
  return (
    <View style={styles.wrapper}>
      {season.poster_path ? (
        <Image
          source={{ uri: `${backdrop_path}${season.poster_path}` }}
          style={styles.poster}
        />
      ) : (
        <View style={[styles.poster, styles.missingPoster]}>
          <Text text='Comming Soon' style={{ textAlign: 'center' }} />
        </View>
      )}
      <View style={styles.content}>
        <Text text={season.name} preset='medium' style={{ fontSize: 18 }} />
        <View style={styles.subTitle}>
          <Text
            text={`${season.episode_count} Tập`}
            style={{ color: color.palette.maskText, fontSize: 13 }}
          />
          {season.air_date && <View style={styles.dot}></View>}
          <Text
            text={season?.air_date}
            style={{ color: color.palette.maskText, fontSize: 13 }}
          />
        </View>
        <Text
          text={season.overview}
          preset='secondary'
          style={{ fontSize: 13, marginTop: spacing[2] }}
        />
      </View>
    </View>
  );
};

export const MemoizedSeasonItem = React.memo(SeasonItem);

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    marginLeft: spacing[3],
    width: scale(screenWidth - 120),
    height: 150,
  },
  poster: {
    height: '100%',
    width: 100,
    resizeMode: 'contain',
    borderRadius: radius.m,
  },
  missingPoster: {
    backgroundColor: color.palette.gray,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing[2],
  },
  content: {
    flex: 1,
    paddingHorizontal: spacing[4],
  },
  subTitle: {
    marginTop: spacing[1],
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    borderRadius: 3,
    width: 6,
    height: 6,
    backgroundColor: color.primary,
    marginHorizontal: spacing[2],
  },
});
