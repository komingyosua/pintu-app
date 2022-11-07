import httpService from '../services/http/http.service';

export const getPriceChanges = async () => {
  const { data } = await httpService.get('/trade/price-changes');

  return data;
};
