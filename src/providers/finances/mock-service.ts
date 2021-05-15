import { IFinancesService, BugetRow, ForecastRow } from './types';

export class FinancesService implements IFinancesService {
  constructor(private api: unknown) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getBuget(year: number): Promise<BugetRow[]> {
    const mock = await import('src/mocks/get-finances-buget.json');
    return mock.data;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getForecast(year: number): Promise<ForecastRow[]> {
    const mock = await import('src/mocks/get-finances-forecast.json');
    return mock.data;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async putBuget(items: BugetRow[]) {
    return new Promise<void>((resolve) => resolve());
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async addYearBuget(year: number) {
    return new Promise<void>((resolve) => resolve());
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async remYearBuget(keys: string[]) {
    return new Promise<void>((resolve) => resolve());
  }
}

export default FinancesService;
