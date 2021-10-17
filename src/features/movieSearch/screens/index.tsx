import { movieApi } from '@api';
import { images } from '@assets/images';
import { scale } from '@common';
import { ListEmpty, ListHeader, SearchBox, TabScreen, Text } from '@components';
import { useDebounce } from '@hooks';
import { Movie } from '@models';
import { BottomTabParamList } from '@navigation/bottomTabNavigators';
import { StackScreenProps } from '@react-navigation/stack';
import { spacing } from '@themes';
import { take } from 'lodash';
import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, Image, StyleSheet, View } from 'react-native';
import { MemoizedSearchMovieItem } from '../components/SearchMovieItem';

export const SearchMovieScreen: FC<
  StackScreenProps<BottomTabParamList, 'searching'>
> = ({ navigation, route }) => {
  const [showResult, setShowResult] = useState(false);
  const [results, setResults] = useState<Movie[]>([]);
  const [query, setQuery] = useState('');
  const debouncedSearchTerm = useDebounce(query, 400);
  const [movie, setMovies] = useState<Movie[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    if (debouncedSearchTerm) {
      searchMovie(debouncedSearchTerm);
    } else {
      setShowResult(false);
    }
  }, [debouncedSearchTerm]);

  const searchMovie = async (query: string) => {
    console.log('call api');
    const searchResponse = await movieApi.search(
      debouncedSearchTerm.toLowerCase()
    );
    setShowResult(true);
    setResults(take(searchResponse.results, 18));
  };

  const handleSearchChange = (query: string) => {
    setQuery(query);
    if (!query) {
      setShowResult(false);
    }
  };

  const handleResearch = (searchKey: string) => {
    setQuery(searchKey);
    setShowResult(true);
  };

  return (
    <TabScreen preset='fixed'>
      <View style={styles.container}>
        <View style={styles.searchBox}>
          <SearchBox onSearchChange={handleSearchChange} value={query} />
        </View>
        {!showResult ? (
          <View style={styles.watchDesc}>
            <Image source={images.watch} />
            <Text
              tx='messages:searchMsg'
              preset='secondary'
              style={styles.desc}
            />
          </View>
        ) : (
          <View style={styles.resultList}>
            <ListHeader title={`${t('label:resultFor')} ${query}`} />
            <Text
              text={`${results?.length} movies`}
              style={{
                paddingLeft: spacing[4],
                fontSize: 13,
                paddingBottom: spacing[2],
              }}
            />

            <FlatList
              key={'v'}
              contentContainerStyle={styles.list}
              columnWrapperStyle={{
                justifyContent: 'space-between',
                marginBottom: 15,
              }}
              data={results}
              showsVerticalScrollIndicator={false}
              numColumns={3}
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item }) => (
                <MemoizedSearchMovieItem movie={item} />
              )}
              ListEmptyComponent={
                <ListEmpty
                  title={t('label:noProductFound')}
                  image='emptyBox'
                  subTitle={t('messages:productNotFound')}
                />
              }
              ListFooterComponent={<View style={{ height: 100 }} />}
            />
          </View>
        )}
      </View>
    </TabScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: spacing[4],
    paddingBottom: spacing[8],
    flex: 1,
  },
  list: {
    paddingHorizontal: spacing[4],
    marginBottom: 100,
  },
  searchBox: {
    paddingBottom: spacing[4],
    paddingHorizontal: spacing[4],
  },
  watchDesc: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  desc: {
    marginTop: spacing[4],
    marginHorizontal: spacing[7],
    textAlign: 'center',
  },

  resultList: {},
  emptyContainer: {
    flex: 1,
    marginTop: spacing[8],
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyIcon: {
    width: scale(211),
    height: scale(175),
    resizeMode: 'contain',
    // tintColor: color.palette.seashell,
  },
  notFoundText: {
    textAlign: 'center',
    marginTop: spacing[4],
    paddingHorizontal: spacing[4],
  },
});
