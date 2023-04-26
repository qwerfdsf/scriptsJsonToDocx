import { HttpException } from '@nestjs/common';
import axios, { AxiosInstance, AxiosResponse } from 'axios';

/**
 * Класс Api для создания Axios экземпляра для доступа к микро сервисам.
 */
export class Api {
  protected readonly instance: AxiosInstance;

  constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL,
      timeout: 15000,
      responseType: 'json',
    });
  }

  private serviceResponse = <T>(
    response: AxiosResponse,
  ) => {
    const responseData = { ...response.data };
    const { message } = responseData;
    delete responseData.message;
    return {
      message,
      ...responseData,
    };
  };

  async get<T = any>(
    url: string,
    config = {},
  ) {
    try {
      const response = await this.instance.get(url, config);
      return this.serviceResponse(response);
    } catch (e) {
      throw new HttpException(
        {
          ...e?.response?.data,
        },
        e.response.status,
      );
    }
  }

  async post<T = any>(
    url: string,
    data = {},
    config = {},
  ) {
    try {
      const response = await this.instance.post(url, data, config);
      return this.serviceResponse(response);
    } catch (e) {
      throw new HttpException(
        {
          ...e?.response?.data,
        },
        e.response.status,
      );
    }
  }

  async delete<T = any>(
    url: string,
    config = {},
  ) {
    try {
      const response = await this.instance.delete(url, config);
      return this.serviceResponse(response);
    } catch (e) {
      throw new HttpException(
        {
          ...e?.response?.data,
        },
        e.response.status,
      );
    }
  }

  async patch<T = any>(
    url: string,
    data = {},
    config = {},
  ) {
    try {
      const response = await this.instance.patch(url, data, config);
      return this.serviceResponse(response);
    } catch (e) {
      throw new HttpException(
        {
          ...e?.response?.data,
        },
        e.response.status,
      );
    }
  }

  async put<T = any>(
    url: string,
    data = {},
    config = {},
  ) {
    try {
      const response = await this.instance.put(url, data, config);
      return this.serviceResponse(response);
    } catch (e) {
      throw new HttpException(
        {
          ...e?.response?.data,
        },
        e.response.status,
      );
    }
  }
}
