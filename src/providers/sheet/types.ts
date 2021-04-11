export interface ISheetService {
  getBuget: () => Promise<BugetRow[]>;
  getForecast: () => Promise<ForecastRow[]>;
}

export type ISheetContext = ISheetService;

export interface BugetRow {
  key: number;
  date: string;
  buget: number;
  cost: number;
  remaining: number;
  profit: number;
}

export interface ForecastRow {
  key: number;
  description: string;
  dateOf: string;
  dateTo: string;
  cost: number;
}
