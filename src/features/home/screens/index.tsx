import {
  nowPlayingList,
  popularTVList,
  populerList,
  upcommingList,
} from '@common';
import { ListHeader, TabScreen, Text } from '@components';
import { BottomTabParamList } from '@navigation/bottomTabNavigators';
import { StackScreenProps } from '@react-navigation/stack';
import { spacing } from '@themes';
import { take } from 'lodash';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, StyleSheet, View } from 'react-native';
import { MemoizedMovieItem } from '../components/MovieItem';
import { MemoizedNowPlayingItem } from '../components/NowPlayingMovieItem';

export const HomeScreen: FC<StackScreenProps<BottomTabParamList, 'home'>> = ({
  navigation,
}) => {
  const { t } = useTranslation();

  const handleViewMore = (categoryId: number) => {
    navigation.navigate(
      'categories' as never,
      { categoryId: categoryId } as never
    );
  };
  const populars = take(populerList, 10);
  const upCommings = take(upcommingList, 10);

  return (
    <TabScreen preset='scroll'>
      <View style={styles.container}>
        {/* <ListHeader title={t('label:categories')} /> */}
        {/* <CategoriesList /> */}
        <Text
          text='Hi, Adam Johnson'
          preset='bold'
          style={{ paddingHorizontal: spacing[4] }}
        />
        <ListHeader title='Đang khởi chiếu' />
        <FlatList
          contentContainerStyle={styles.list}
          data={nowPlayingList}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <MemoizedNowPlayingItem item={item} />}
          ListFooterComponent={<View style={{ margin: 10 }} />}
        />
        <ListHeader
          title={t('label:trending')}
          showMore={true}
          onShowMorePress={() => handleViewMore(1)}
        />
        <FlatList
          contentContainerStyle={styles.list}
          data={populars}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <MemoizedMovieItem item={item} />}
          ListFooterComponent={<View style={{ margin: 10 }} />}
        />
        <ListHeader
          title={t('label:popularTV')}
          showMore={true}
          onShowMorePress={() => handleViewMore(1)}
        />
        <FlatList
          contentContainerStyle={styles.list}
          data={popularTVList}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <MemoizedMovieItem item={item} type='tv' />}
          ListFooterComponent={<View style={{ margin: 10 }} />}
        />
        <ListHeader
          title={t('label:upComming')}
          showMore={true}
          onShowMorePress={() => handleViewMore(1)}
        />
        <FlatList
          contentContainerStyle={styles.list}
          data={upCommings}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <MemoizedMovieItem item={item} />}
          ListFooterComponent={<View style={{ margin: 10 }} />}
        />
      </View>
    </TabScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: spacing[2],
    paddingBottom: spacing[8],
  },
  title: {
    fontSize: 18,
    paddingLeft: spacing[4],
  },
  subTitle: {
    fontSize: 13,
    paddingHorizontal: spacing[4],
    marginTop: spacing[2],
  },
  list: {
    paddingVertical: spacing[2],
  },
});
