export interface LoginParams {
  email: string;
  password: string;
}

export interface RegisterParams {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface VerifyParams extends LoginParams {
  code: string;
}
