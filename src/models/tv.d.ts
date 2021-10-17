import { Genres } from './movie';

export interface TV {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}
export interface TVDetail {
  backdrop_path: string;
  episode_run_time: number[];
  first_air_date: String;
  genres: Genres[];
  id: number;
  name: string;
  number_of_episodes: number;
  number_of_seasons: number;
  original_name: string;
  overview: string;
  poster_path: string;
  seasons: Season[];
}

export interface Season {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
}
