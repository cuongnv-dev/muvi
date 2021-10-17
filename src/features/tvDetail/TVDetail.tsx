import { tvApi } from '@api';
import { Text } from '@components';
import { CastList } from '@features/movieDetail/components/CastList';
import { Cast, MovieCreditResponse, TVDetail } from '@models';
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
import { MemoizedTVPoster } from './components/TVPoster';
import { MemoizedTVSummary } from './components/TVSummary';

const TVDetailScreen: FC<StackScreenProps<MainNavigatorParams, 'tvDetail'>> = ({
  navigation,
  route,
}) => {
  const tvId = route.params.tvId;
  const [details, setDetails] = useState<TVDetail | null>(null);
  // const [relatedList, setRelatedList] = useState<TV[]>([]);
  const [activeTab, setActiveTab] = useState(0);
  const [casts, setCasts] = useState<Cast[]>();
  const [videoId, setVideoId] = useState('');

  useEffect(() => {
    getTVDetail();
  }, [navigation, route]);

  const tabOnPress = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  const getTVDetail = useCallback(async () => {
    const [details, creditResponse, videoResponse] = await Promise.all<
      TVDetail,
      MovieCreditResponse,
      any
    >([tvApi.getDetails(tvId), tvApi.getTVCredit(tvId), tvApi.getVideo(tvId)]);
    setDetails(details);
    setCasts(take(creditResponse.cast, 10));
    setVideoId(videoResponse?.results[0]?.key);
  }, [tvId]);

  if (!details)
    return (
      <View style={styles.loadingWrapper}>
        <ActivityIndicator size='large' color={color.primary} />
      </View>
    );

  return (
    <View style={styles.wrapper}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <MemoizedTVPoster tv={details} />
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
          {activeTab === 0 && <MemoizedTVSummary details={details} />}
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

export default TVDetailScreen;

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
