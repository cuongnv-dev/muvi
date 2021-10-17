import { ListHeader, Text } from '@components';
import { TVDetail } from '@models';
import { spacing } from '@themes';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, StyleSheet, View } from 'react-native';
import { MemoizedSeasonItem } from './SeasonItem';

interface TVSummaryProps {
  details: TVDetail;
}

const TVSummary = ({ details }: TVSummaryProps) => {
  const { t } = useTranslation();
  console.log('render summary');
  return (
    <View style={{ marginVertical: spacing[5] }}>
      <Text text={details.overview} style={styles.desc} />
      <ListHeader title={t('label:seasons')} showMore={false} />
      <FlatList
        contentContainerStyle={styles.list}
        data={details.seasons}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <MemoizedSeasonItem season={item} />}
        ListFooterComponent={<View style={{ margin: 10 }} />}
      />
    </View>
  );
};
export const MemoizedTVSummary = React.memo(TVSummary);

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
