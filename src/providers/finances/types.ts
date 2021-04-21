export interface IFinancesService {
  getBuget: (year: number) => Promise<BugetRow[]>;
  getForecast: (year: number) => Promise<ForecastRow[]>;
  putBuget: (items: BugetRow[]) => Promise<void>;
  addYearBuget: (year: number) => Promise<void>;
}

export type IFinancesContext = IFinancesService;

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
