import axios, { AxiosInstance, AxiosResponse } from 'axios';
import queryString from 'query-string';

export const axiosClient = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

export const setupAxios = (axios: AxiosInstance, store: any) => {
  // axios.interceptors.request.use(
  //   config => {
  //     const {
  //       auth: {authToken},
  //     } = store.getState();
  //     if (authToken) {
  //       config.headers.Authorization = `Bearer ${authToken}`;
  //     }
  //     return config;
  //   },
  //   err => Promise.reject(err),
  // );
  axios.interceptors.response.use(
    function (response: AxiosResponse) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response.data;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    }
  );
};
