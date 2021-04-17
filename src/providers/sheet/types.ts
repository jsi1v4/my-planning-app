export interface ISheetService {
  getBuget: (year: number) => Promise<BugetRow[]>;
  getForecast: (year: number) => Promise<ForecastRow[]>;
  putBuget: (key: number, value: number) => Promise<void>;
}

export type ISheetContext = ISheetService;

export interface BugetRow {
  key: number;
  year: number;
  month: number;
  buget: number;
  cost: number;
  remaining?: number;
  profit?: number;
}

export interface ForecastRow {
  key: number;
  description: string;
  yearOf: number;
  yearTo: number;
  monthOf: number;
  monthTo: number;
  cost: number;
}
