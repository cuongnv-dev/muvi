import { Dimensions } from 'react-native';

export const storageKey = {
  LANG_CODE: 'LANG_CODE',
};

export const languages = [
  { label: 'English', value: 'en' },
  { label: 'Japanese', value: 'jp' },
];
export const screenWidth = Dimensions.get('screen').width;
export const screenHeight = Dimensions.get('screen').height;

export const backdrop_path = 'https://image.tmdb.org/t/p/original';
export const theMovieApiKey = '185ed322211af9fdaac6c02a9e3a2962';
