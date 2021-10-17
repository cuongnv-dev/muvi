import { TabScreen, Text } from '@components';
import { useAppSelector } from '@store';
import { spacing } from '@themes';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { MyListItem } from './components/MyListItem';

const MyListScreen = () => {
  const { movies } = useAppSelector((state) => state.myList);
  console.log(`movies`, movies.length);
  return (
    <TabScreen preset='fixed'>
      <View style={styles.container}>
        <Text tx='label:myList' preset='bold' />
        <FlatList
          contentContainerStyle={styles.list}
          data={movies}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <MyListItem movie={item} />}
          ListFooterComponent={<View style={{ margin: 10 }} />}
        />
      </View>
    </TabScreen>
  );
};

export default MyListScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing[4],
    marginTop: spacing[3],
  },
  list: {
    paddingVertical: spacing[2],
  },
});
