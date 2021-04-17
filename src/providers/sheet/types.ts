export interface ISheetService {
  getBuget: (year: number) => Promise<BugetRow[]>;
  getForecast: (year: number) => Promise<ForecastRow[]>;
  putBuget: (item: BugetRow) => Promise<void>;
}

export type ISheetContext = ISheetService;

export interface BugetRow {
  key: string;
  year: number;
  month: number;
  buget: number;
  cost: number;
  remaining?: number;
  profit?: number;
}

export interface ForecastRow {
  key: string;
  description: string;
  yearOf: number;
  yearTo: number;
  monthOf: number;
  monthTo: number;
  cost: number;
}
