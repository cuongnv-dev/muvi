import { axiosClient } from './setupAxios';
import { theMovieApiKey } from '@common';
import { Movie, MovieCreditResponse, TVDetail, MovieResponse } from '@models';

export const tvApi = {
  getDetails: (tvApi: number): Promise<TVDetail> => {
    return axiosClient.get(
      `/tv/${tvApi}?api_key=${theMovieApiKey}&language=vi-VN`
    );
  },
  getDetailInEn: (tvApi: number): Promise<TVDetail> => {
    return axiosClient.get(
      `/tv/${tvApi}?api_key=${theMovieApiKey}&language=en-US`
    );
  },
  getRelated: (tvApi: number): Promise<MovieResponse> => {
    return axiosClient.get(
      `/tv/${tvApi}/recommendations?api_key=${theMovieApiKey}&language=vi-VN&page=1`
    );
  },
  getTVCredit: (tvApi: number): Promise<MovieCreditResponse> => {
    return axiosClient.get(
      `/tv/${tvApi}/credits?api_key=${theMovieApiKey}&language=vi-VN`
    );
  },
  getVideo: (tvApi: number): Promise<any> => {
    return axiosClient.get(
      `/tv/${tvApi}/videos?api_key=${theMovieApiKey}&language=en-US`
    );
  },
};
