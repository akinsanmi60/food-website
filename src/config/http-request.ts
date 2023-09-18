import Api from 'config/http-common';
import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import type { AxiosRequestConfig } from 'axios';

// import handleApiError from 'helpers/handleApiError';

interface HTTPParams<T> {
  method?: string;
  url: string;
  headers?: object;
  data?: T;
  needToken?: boolean;
  isFormData?: boolean;
  checkRefresh?: boolean;
  version?: string;
}

export interface HTTPResponse<T> {
  status: boolean;
  message: string;
  data: T;
}

export interface IAxoisResponse {
  response: {
    data: {
      detail: string;
      access: string;
    };
    status: number;
    statusText: string;
  };
}

export const httpRequest =
  (): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig['method'];
      data?: AxiosRequestConfig['data'];
      version?: string;
    },
    unknown,
    unknown
  > =>
  async <T, R>(params: HTTPParams<T>) => {
    const { method, data, url, version = 'v1' } = params;
    try {
      return await Api<R>({
        method: method,
        data: data,
        url: `/${version}/${url}`,
      });
    } catch (error) {
      const err = error as unknown as IAxoisResponse;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data,
        },
      };
    }
  };
