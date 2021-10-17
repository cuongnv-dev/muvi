import { movieApi } from '@api';
import { Text } from '@components';
import {
  Cast,
  Movie,
  MovieCreditResponse,
  MovieDetail,
  MovieResponse,
} from '@models';
import { MainNavigatorParams } from '@navigation/mainNavigator';
import { StackScreenProps } from '@react-navigation/stack';
import { color, spacing } from '@themes';
import { take } from 'lodash';
import React, { FC, useCallback, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import { CastList } from './components/CastList';
import { MemoizedMoviePoster } from './components/MoviePoster';
import { MemoizedMovieSummary } from './components/MovieSummary';

const MovieDetailScreen: FC<
  StackScreenProps<MainNavigatorParams, 'movieDetail'>
> = ({ navigation, route }) => {
  const movieId = route.params.movieId;
  const [details, setDetails] = useState<MovieDetail | null>(null);
  const [relatedList, setRelatedList] = useState<Movie[]>([]);
  const [activeTab, setActiveTab] = useState(0);
  const [casts, setCasts] = useState<Cast[]>();
  const [videoId, setVideoId] = useState('');

  useEffect(() => {
    getMovieDetail();
  }, [navigation, route]);

  const tabOnPress = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  const getMovieDetail = useCallback(async () => {
    const [details, relatedListResponse, creditResponse, videoResponse] =
      await Promise.all<MovieDetail, MovieResponse, MovieCreditResponse, any>([
        movieApi.getDetails(movieId),
        movieApi.getRelated(movieId),
        movieApi.getMovieCredit(movieId),
        movieApi.getVideo(movieId),
      ]);
    setDetails(details);
    setRelatedList(take(relatedListResponse.results, 10));
    setCasts(take(creditResponse.cast, 5));
    setVideoId(videoResponse?.results[0]?.key);
  }, [movieId]);

  if (!details)
    return (
      <View style={styles.loadingWrapper}>
        <ActivityIndicator size='large' color={color.primary} />
      </View>
    );

  return (
    <View style={styles.wrapper}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <MemoizedMoviePoster movie={details} />
        <View>
          <View style={styles.tabs}>
            <TouchableOpacity
              onPress={() => tabOnPress(0)}
              style={[
                styles.tabButton,
                activeTab === 0 ? styles.tabActive : {},
              ]}
            >
              <Text text='Summary' preset='medium' />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => tabOnPress(1)}
              style={[
                styles.tabButton,
                activeTab === 1 ? styles.tabActive : {},
              ]}
            >
              <Text text='Trailer' preset='medium' />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => tabOnPress(2)}
              style={[
                styles.tabButton,
                activeTab === 2 ? styles.tabActive : {},
              ]}
            >
              <Text text='Casts' preset='medium' />
            </TouchableOpacity>
          </View>
          {activeTab === 0 && (
            <MemoizedMovieSummary details={details} relatedList={relatedList} />
          )}
          {activeTab === 2 && casts && <CastList casts={casts} />}
          {activeTab === 1 && videoId && (
            <View
              style={{ paddingHorizontal: spacing[4], marginTop: spacing[4] }}
            >
              <YoutubePlayer height={320} play={true} videoId={videoId} />
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default MovieDetailScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: color.background,
    // paddingBottom: spacing[6],
  },
  loadingWrapper: {
    flex: 1,
    backgroundColor: color.background,
    justifyContent: 'center',
  },

  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tabButton: {
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[4],
  },
  tabActive: {
    borderBottomWidth: 2,
    borderBottomColor: color.primary,
  },
});
