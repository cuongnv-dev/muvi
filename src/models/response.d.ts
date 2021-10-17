import { Cast } from './cast';
import { Movie } from './movie';
import { User } from './user';

export interface ServiceResponse<T> {
  data?: T | null;
  error?: SupabaseError | null;
}

interface SupabaseError {
  name?: string;
  message?: string;
  stack?: string;
}

export interface TokenData {
  token: string;
  expiresIn: string;
  refreshToken: string;
}

export interface LoginResponse {
  token: string;
  success: boolean;
  error?: string;
  data?: {
    user: User;
  };
}

export interface ApiResponse<T> {
  success: boolean;
  error?: string;
  data?: T;
}

export interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface MovieCreditResponse {
  id: number;
  cast: Cast[];
  crew: any[];
}
