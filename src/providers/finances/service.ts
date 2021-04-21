import { ApiInstance } from 'src/lib/api';
import { IFinancesService, BugetRow, ForecastRow } from './types';

export class FinancesService implements IFinancesService {
  constructor(private api: ApiInstance) {}

  async getBuget(year?: number) {
    const filterYear = year || new Date().getFullYear();
    return Promise.all([
      this.api.get<BugetRow>('buget', {
        orderBy: 'month',
        where: [['year', '==', filterYear]]
      }),
      this.api.get<BugetRow>('buget', {
        where: [['year', '==', filterYear - 1]]
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

  async getForecast(year?: number) {
    const filterYear = year || new Date().getFullYear();
    return this.api.get<ForecastRow>('forecast', {
      orderBy: 'monthOf',
      where: [['yearOf', '==', filterYear]]
    });
  }

  async putBuget(items: BugetRow[]) {
    await Promise.all(
      items.map((item) =>
        this.api.put('buget', item.key, {
          year: item.year,
          month: item.month,
          buget: item.buget,
          cost: item.cost
        })
      )
    );
  }

  async addYearBuget(year: number) {
    const months = new Array(12).fill({ year, buget: 0, cost: 0 });
    await Promise.all(
      months.map((item, month) => this.api.post('buget', { ...item, month }))
    );
  }
}

export default FinancesService;
