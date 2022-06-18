import axios, { AxiosRequestConfig } from 'axios';
import env from '../constants/env';

interface IConfig extends AxiosRequestConfig {
  url: string;
}

class HttpService {
  baseUrl;
  fetchingService;
  apiVersion;

  constructor(
      baseUrl = env.SERVER_URL,
      fetchingService = axios,
      apiVersion = 'api',
  ) {
    this.baseUrl = baseUrl;
    this.fetchingService = fetchingService;
    this.apiVersion = apiVersion;
  }

  private getFullApiUrl(url: string) {
    return `${this.baseUrl}/${this.apiVersion}/${url}`;
  }

  private populateTokenToHeaderConfig() {
    return {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    };
  }

  private extractUrlAndDataFromConfig({
    // eslint-disable-next-line no-unused-vars
    data, url, ...configWithoutDataAndUrl
  }: IConfig) {
    return configWithoutDataAndUrl;
  }

  get(config: IConfig, withAuth=true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig(),
      };
    }
    return this.fetchingService.get(
        this.getFullApiUrl(config.url),
        this.extractUrlAndDataFromConfig(config),
    );
  }

  post(config: IConfig, withAuth=true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig(),
      };
    }
    return this.fetchingService.post(
        this.getFullApiUrl(config.url),
        config.data,
        this.extractUrlAndDataFromConfig(config),
    );
  }

  put(config: IConfig, withAuth=true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig(),
      };
    }
    return this.fetchingService.put(
        this.getFullApiUrl(config.url),
        config.data,
        this.extractUrlAndDataFromConfig(config),
    );
  }

  delete(config: IConfig, withAuth=true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig(),
      };
    }
    return this.fetchingService.delete(
        this.getFullApiUrl(config.url),
        this.extractUrlAndDataFromConfig(config),
    );
  }
};

export default HttpService;
