import { spacing } from '@themes';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { ListHeader, Text } from '@components';
import { MemoizedMovieItem } from '@features/home/components/MovieItem';
import { Movie, MovieDetail } from '@models';
import { useTranslation } from 'react-i18next';

interface MovieSummaryProps {
  details: MovieDetail;
  relatedList: Movie[];
}

const MovieSummary = ({ details, relatedList }: MovieSummaryProps) => {
  const { t } = useTranslation();
  console.log('render summary');
  return (
    <View style={{ marginVertical: spacing[5] }}>
      <Text text={details.overview || 'Chưa có mô tả'} style={styles.desc} />
      <ListHeader title={t('label:relatedMovies')} showMore={false} />
      <FlatList
        contentContainerStyle={styles.list}
        data={relatedList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <MemoizedMovieItem item={item} />}
        ListFooterComponent={<View style={{ margin: 10 }} />}
      />
    </View>
  );
};
export const MemoizedMovieSummary = React.memo(MovieSummary);

const styles = StyleSheet.create({
  desc: {
    paddingHorizontal: spacing[4],
    marginBottom: spacing[4],
    fontSize: 14,
  },
  list: {
    paddingVertical: spacing[2],
  },
});
