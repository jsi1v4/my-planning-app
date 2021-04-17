import { ApiInstance } from 'src/lib/api';
import { ISheetService, BugetRow, ForecastRow } from './types';

export class SheetService implements ISheetService {
  constructor(private api: ApiInstance) {}

  async getBuget(year: number) {
    return Promise.all([
      this.api.get<BugetRow>('buget', {
        orderBy: 'month',
        where: [['year', '==', year]]
      }),
      this.api.get<BugetRow>('buget', {
        where: [['year', '==', year - 1]]
      })
    ]).then(([currentYear, lastYear]) => {
      let profit = lastYear.reduce((acc, n) => acc + (n.buget - n.cost), 0);
      return currentYear.map((t) => {
        const remaining = t.buget - t.cost;
        profit += remaining;
        return {
          ...t,
          remaining,
          profit
        };
      });
    });
  }

  async getForecast(year: number) {
    return this.api.get<ForecastRow>('forecast', {
      orderBy: 'monthOf',
      where: [['yearOf', '==', year]]
    });
  }

  async putBuget(item: BugetRow) {
    return this.api.put('buget', item.key, {
      year: item.year,
      month: item.month,
      buget: item.buget,
      cost: item.cost
    });
  }
}

export default SheetService;
