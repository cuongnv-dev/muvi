import { backdrop_path, screenWidth } from '@common';
import { Movie } from '@models';
import { useNavigation } from '@react-navigation/native';
import { radius, spacing } from '@themes';
import React from 'react';
import { Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';

const width = (screenWidth - 32) / 3 - 6;

interface SearchMovieItemProps {
  movie: Movie;
}

const SearchMovieItem = ({ movie }: SearchMovieItemProps) => {
  const navigation = useNavigation();

  const handleItemPress = () => {
    navigation.navigate('movieDetail' as never, { movieId: movie.id } as never);
  };
  return (
    <TouchableWithoutFeedback onPress={handleItemPress}>
      <Image
        source={{ uri: `${backdrop_path}${movie.poster_path}` }}
        style={styles.poster}
      />
    </TouchableWithoutFeedback>
  );
};

export const MemoizedSearchMovieItem = React.memo(SearchMovieItem);

const styles = StyleSheet.create({
  poster: {
    width: width,
    height: width * 1.5,
    resizeMode: 'contain',
    borderRadius: radius.m,
  },
  info: {
    flex: 1,
    paddingHorizontal: spacing[4],
  },
});
