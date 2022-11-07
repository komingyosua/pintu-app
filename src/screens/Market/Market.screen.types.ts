export interface IPriceChanges {
  payload: Array<Record<string, number>>;
}

export interface DataTypeIcon {
  image: string;
  color: string;
}

export interface DataType {
  key: string;
  icon: DataTypeIcon;
  crypto: string;
  symbol: string;
  price: string;
  hour: number;
  week: number;
  month: number;
  year: number;
}
