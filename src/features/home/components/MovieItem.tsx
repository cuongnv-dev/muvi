import { backdrop_path, scale } from '@common';
import { Movie, TV } from '@models';
import { useNavigation } from '@react-navigation/native';
import { radius, spacing } from '@themes';
import React from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

interface MovieItemProps {
  item: Movie | TV;
  type?: 'movie' | 'tv';
}

const MovieItem = ({ item, type = 'movie' }: MovieItemProps) => {
  const navigation = useNavigation();
  const url = type === 'movie' ? 'movieDetail' : 'tvDetail';
  const params = type === 'movie' ? { movieId: item.id } : { tvId: item.id };
  const handleItemPress = () => {
    navigation.navigate(url as never, params as never);
  };

  return (
    <TouchableOpacity key={item.id} onPress={handleItemPress}>
      <ImageBackground
        source={{ uri: `${backdrop_path}${item.poster_path}` }}
        style={[styles.container]}
      ></ImageBackground>
    </TouchableOpacity>
  );
};

export const MemoizedMovieItem = React.memo(MovieItem);

const styles = StyleSheet.create({
  container: {
    marginLeft: spacing[3],
    width: scale(100),
    height: scale(150),
    resizeMode: 'cover',
    borderRadius: radius.m,
    overflow: 'hidden',
  },
  info: {
    flex: 1,
    padding: spacing[4],
    justifyContent: 'flex-end',
  },
  vote: {
    marginTop: spacing[1],
    flexDirection: 'row',
    alignItems: 'center',
  },
});
