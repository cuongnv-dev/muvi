import { backdrop_path, scale, screenWidth } from '@common';
import { Text } from '@components';
import { Feather as Icon } from '@expo/vector-icons';
import { Movie } from '@models';
import { useNavigation } from '@react-navigation/native';
import { color, radius, spacing } from '@themes';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

interface NowPlayingItemProps {
  item: Movie;
}

const NowPlayingItem = ({ item }: NowPlayingItemProps) => {
  const navigation = useNavigation();

  const handleItemPress = () => {
    navigation.navigate('movieDetail' as never, { movieId: item.id } as never);
  };

  return (
    <TouchableOpacity key={item.id} onPress={handleItemPress}>
      <ImageBackground
        source={{ uri: `${backdrop_path}${item.backdrop_path}` }}
        style={[styles.container]}
      >
        <LinearGradient
          style={styles.info}
          colors={['transparent', 'rgba(0,0,0,0.5)', 'rgba(0,0,0,0.8)']}
        >
          <Text text={item.title} preset='bold' style={{ fontSize: 16 }} />
          <View style={styles.vote}>
            <Icon name='star' size={scale(18)} color={color.primary} />
            <Text
              text={`${item.vote_average}`}
              preset='bold'
              style={{ fontSize: 14, marginLeft: spacing[2] }}
            />
          </View>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export const MemoizedNowPlayingItem = React.memo(NowPlayingItem);

const styles = StyleSheet.create({
  container: {
    marginLeft: spacing[3],
    width: scale(screenWidth - 100),
    height: scale(189),
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
