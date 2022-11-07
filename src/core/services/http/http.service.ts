import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

const INITIAL_TIMEOUT = 20000;
const INITIAL_BASE_URL = 'https://api.pintu.co.id/v2';

class HttpService {
  static INSTANCE: HttpService;
  httpService: AxiosInstance;

  static getInstance = () => {
    if (!HttpService.INSTANCE) {
      HttpService.INSTANCE = new HttpService();
    }
    return HttpService.INSTANCE;
  };

  constructor() {
    this.httpService = axios.create({
      baseURL: INITIAL_BASE_URL,
      timeout: INITIAL_TIMEOUT,
    });

    this.httpService.interceptors.response.use(this.onSuccess, this.onError);
  }

  onSuccess = (response: AxiosResponse) => response;

  onError = (err: AxiosError) => Promise.reject(err);
}

export const { httpService } = HttpService.getInstance();
export default httpService;
