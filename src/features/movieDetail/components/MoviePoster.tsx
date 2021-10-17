import { backdrop_path, screenHeight } from '@common';
import { BackHeader, Text, toastSuccess } from '@components';
import { MovieDetail } from '@models';
import { color, radius, spacing } from '@themes';
import { getRuntime } from '@utils/method';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import shortid from 'shortid';
import { Feather as Icon } from '@expo/vector-icons';
import { useAppDispatch } from '@store';
import { myListActions } from '@features/myList/myListSlice';

const MoviePoster = ({ movie }: { movie: MovieDetail }) => {
  const insets = useSafeAreaInsets();
  const dispatch = useAppDispatch();

  const handleAddToList = () => {
    dispatch(myListActions.addToList(movie));
    toastSuccess('Đã thêm vào danh sách của bạn');
  };
  return (
    <ImageBackground
      source={{ uri: `${backdrop_path}${movie.poster_path}` }}
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
          <Text text={movie.title} preset='bold' style={{ fontSize: 22 }} />
          <View style={styles.runtimeRow}>
            <Text
              text={getRuntime(movie.runtime)}
              style={{ fontSize: 14, color: color.palette.maskText }}
            />
            <Text text='HD' style={styles.hdBox} />
          </View>
          <View style={styles.genresRow}>
            {movie.genres.map((genres, index) => (
              <View key={shortid.generate()} style={styles.genres}>
                {index !== 0 && <View style={styles.dot}></View>}
                <Text
                  text={genres.name}
                  style={{ color: color.palette.maskText, fontSize: 13 }}
                />
              </View>
            ))}
          </View>
          <View style={styles.actionBtn}>
            <TouchableOpacity style={styles.playButton}>
              <Icon name='play' size={18} color={color.palette.background} />
              <Text
                text='Play'
                style={{
                  marginLeft: spacing[2],
                  color: color.palette.background,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.addToListButton}
              onPress={handleAddToList}
            >
              <Icon name='plus' size={18} color={color.primary} />
              <Text
                text='My List'
                style={{
                  marginLeft: spacing[2],
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

export const MemoizedMoviePoster = React.memo(MoviePoster);

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
    flexWrap: 'wrap',
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
