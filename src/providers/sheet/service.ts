import { ApiInstance } from 'src/lib/api';
import { ISheetService, BugetRow, ForecastRow } from './types';

export class SheetService implements ISheetService {
  constructor(private api: ApiInstance) {}

  async getBuget() {
    return this.api.get<BugetRow[]>('buget', { orderBy: 'date' });
  }

  async getForecast() {
    return this.api.get<ForecastRow[]>('forecast', { orderBy: 'dateOf' });
  }
}

export default SheetService;
