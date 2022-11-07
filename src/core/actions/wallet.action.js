import httpService from '../services/http/http.service';

export const getSupportedCurrencies = async () => {
  const { data } = await httpService.get('/wallet/supportedCurrencies');

  return data;
};
