import { backdrop_path, screenHeight } from '@common';
import { BackHeader, Text } from '@components';
import { TVDetail } from '@models';
import { color, radius, spacing } from '@themes';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import shortid from 'shortid';

const TVPoster = ({ tv }: { tv: TVDetail }) => {
  const insets = useSafeAreaInsets();
  return (
    <ImageBackground
      source={{ uri: `${backdrop_path}${tv.poster_path}` }}
      style={styles.poster}
    >
      <LinearGradient
        style={[styles.posterContent, { paddingTop: insets.top }]}
        colors={[
          'rgba(37,39,42,0.2)',
          'rgba(37,39,42,0.3)',
          'rgba(37,39,42,0.7)',
          'rgba(37,39,42,0.9)',
        ]}
      >
        <BackHeader />
        <View style={styles.summary}>
          <Text
            text='LOẠT PHIM'
            preset='bold'
            style={{ letterSpacing: 8, fontSize: 10, color: color.dim }}
          />
          <Text text={tv.name} preset='bold' style={{ fontSize: 22 }} />
          <View style={styles.runtimeRow}>
            <Text
              text={tv.first_air_date.substring(0, 4)}
              style={{ fontSize: 14, color: color.palette.maskText }}
            />
            <View style={styles.dot}></View>
            <Text
              text={`${tv.number_of_seasons} Mùa`}
              style={{ fontSize: 14, color: color.palette.maskText }}
            />
            <Text text='HD' style={styles.hdBox} />
          </View>
          <View style={styles.genresRow}>
            {tv.genres.map((genres, index) => (
              <View key={shortid.generate()} style={styles.genres}>
                {index !== 0 && <View style={styles.dot}></View>}
                <Text
                  text={genres.name}
                  style={{ color: color.palette.maskText, fontSize: 13 }}
                />
              </View>
            ))}
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

export const MemoizedTVPoster = React.memo(TVPoster);

const styles = StyleSheet.create({
  poster: {
    height: screenHeight * 0.6,
  },
  posterContent: {
    height: '100%',
    justifyContent: 'space-between',
  },
  summary: {
    paddingHorizontal: spacing[4],
    paddingBottom: spacing[3],
  },
  runtimeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing[2],
  },
  hdBox: {
    marginLeft: spacing[2],
    padding: 2,
    borderRadius: radius.s,
    borderWidth: 1,
    fontSize: 12,
    color: color.palette.maskText,
    borderColor: color.palette.maskText,
  },
  genresRow: {
    flexDirection: 'row',
    marginTop: spacing[2],
  },
  genres: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  dot: {
    borderRadius: 3,
    width: 6,
    height: 6,
    backgroundColor: color.primary,
    marginHorizontal: spacing[2],
  },
  actionBtn: {
    flexDirection: 'row',
    width: '100%',
    marginTop: spacing[4],
  },
  playButton: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: color.primary,
    height: 40,
    borderRadius: radius.s,
    marginRight: spacing[4],
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToListButton: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: color.palette.secondaryText,
    height: 40,
    borderRadius: radius.s,
    marginLeft: spacing[4],
    justifyContent: 'center',
    alignItems: 'center',
  },
});
