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

  private extractUrlAndDataFromConfig({
    // eslint-disable-next-line no-unused-vars
    data, url, ...configWithoutDataAndUrl
  }: IConfig) {
    return configWithoutDataAndUrl;
  }

  get(url: string) {
    return this.fetchingService.get(
        this.getFullApiUrl(url),
    );
  }

  post(config: IConfig) {
    return this.fetchingService.post(
        this.getFullApiUrl(config.url),
        config.data,
        this.extractUrlAndDataFromConfig(config),
    );
  }

  put(config: IConfig) {
    return this.fetchingService.put(
        this.getFullApiUrl(config.url),
        config.data,
        this.extractUrlAndDataFromConfig(config),
    );
  }

  delete(url: string) {
    return this.fetchingService.delete(this.getFullApiUrl(url));
  }
};

export default HttpService;
