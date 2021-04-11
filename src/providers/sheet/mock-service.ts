import MockBuget from 'src/mocks/get-sheet-buget.json';
import MockForecastSheet from 'src/mocks/get-sheet-forecast.json';

import { ISheetService, BugetRow, ForecastRow } from './types';

export class SheetService implements ISheetService {
  constructor(private api: unknown) {}

  async getBuget() {
    return new Promise<BugetRow[]>((resolve) => resolve(MockBuget.data));
  }

  async getForecast() {
    return new Promise<ForecastRow[]>((resolve) =>
      resolve(MockForecastSheet.data)
    );
  }
}

export default SheetService;
