import { apiUrls } from '@common';
import { LoginParams, LoginResponse, TelCode } from '@models';
import { axiosClient } from './setupAxios';
export const authApi = {
  login(params: LoginParams): Promise<LoginResponse> {
    return axiosClient.post(apiUrls.LOGIN, {
      tel: params.phoneNumber,
      password: params.password,
    });
  },
  getListCountries(): Promise<TelCode[]> {
    return axiosClient.get(apiUrls.COUNTRY_CODE, {});
  },
};
