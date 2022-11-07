import { IPriceChanges } from './Market.screen.types';

export const mapCurrency =
  (priceChangesData: IPriceChanges) =>
  (
    value: {
      logo: string;
      color: string;
      name: string;
      currencySymbol: string;
    },
    index: number,
  ) => ({
    key: index + 1,
    icon: {
      image: value.logo,
      color: value.color,
    },
    crypto: value.name,
    symbol: value.currencySymbol,
    price: priceChangesData.payload[index].latestPrice,
    hour: priceChangesData.payload[index].day,
    week: priceChangesData.payload[index].week,
    month: priceChangesData.payload[index].month,
    year: priceChangesData.payload[index].year,
  });
