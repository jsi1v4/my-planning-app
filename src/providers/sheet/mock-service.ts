import { ISheetService, BugetRow, ForecastRow } from './types';

export class SheetService implements ISheetService {
  constructor(private api: unknown) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getBuget(year: number): Promise<BugetRow[]> {
    const mock = await import('src/mocks/get-sheet-buget.json');
    return mock.data;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getForecast(year: number): Promise<ForecastRow[]> {
    const mock = await import('src/mocks/get-sheet-forecast.json');
    return mock.data;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async putBuget(item: BugetRow) {
    return new Promise<void>((resolve) => resolve());
  }
}

export default SheetService;
