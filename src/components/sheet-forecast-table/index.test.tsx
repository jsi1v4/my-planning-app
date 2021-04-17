import React from 'react';
import { render } from '@testing-library/react';

import { I18nMock } from 'src/i18n/mock';
import { SheetForecastTable } from './index';

const MOCK = [
  {
    key: 1,
    description: 'Test',
    yearOf: 2021,
    yearTo: 2021,
    monthOf: 1,
    monthTo: 2,
    cost: 1000
  }
];

describe('SheetForecastTable component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<SheetForecastTable data={[]} />, {
      wrapper: I18nMock
    });
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render component', async () => {
    const { getByText } = render(<SheetForecastTable data={MOCK} />, {
      wrapper: I18nMock
    });

    expect(getByText(/Test/g).innerHTML).toBeDefined();
    expect(getByText(/Jan 2021/g).innerHTML).toBeDefined();
    expect(getByText(/Feb 2021/g).innerHTML).toBeDefined();
    expect(getByText(/1,000/g).innerHTML).toBeDefined();
  });
});
