import { axiosClient } from './setupAxios';
import { theMovieApiKey } from '@common';
import {
  Movie,
  MovieCreditResponse,
  MovieDetail,
  MovieResponse,
} from '@models';

export const movieApi = {
  getDetails: (movieId: number): Promise<MovieDetail> => {
    return axiosClient.get(
      `/movie/${movieId}?api_key=${theMovieApiKey}&language=vi-VN`
    );
  },
  getRelated: (movieId: number): Promise<MovieResponse> => {
    return axiosClient.get(
      `/movie/${movieId}/recommendations?api_key=${theMovieApiKey}&language=vi-VN&page=1`
    );
  },
  getMovieCredit: (movieId: number): Promise<MovieCreditResponse> => {
    return axiosClient.get(
      `/movie/${movieId}/credits?api_key=${theMovieApiKey}&language=vi-VN`
    );
  },
  getVideo: (movieId: number): Promise<any> => {
    return axiosClient.get(
      `/movie/${movieId}/videos?api_key=${theMovieApiKey}&language=en-US`
    );
  },
  search: (query: string): Promise<MovieResponse> => {
    return axiosClient.get(
      `/search/movie?api_key=${theMovieApiKey}&language=vi-VN&query=${query}&page=1&include_adult=false`
    );
  },
};
