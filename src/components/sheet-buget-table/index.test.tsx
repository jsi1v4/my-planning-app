import React from 'react';
import { render } from '@testing-library/react';

import { I18nMock } from 'src/i18n/mock';
import { SheetBugetTable } from './index';

const MOCK = [
  {
    key: 1,
    year: 2021,
    month: 1,
    buget: 4500,
    cost: 3290,
    remaining: 1210,
    profit: 1210
  }
];

describe('SheetBugetTable component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<SheetBugetTable data={[]} />, {
      wrapper: I18nMock
    });
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render component', async () => {
    const { getByText } = render(<SheetBugetTable data={MOCK} />, {
      wrapper: I18nMock
    });

    expect(getByText(/2021/g).innerHTML).toBeDefined();
    expect(getByText(/January/g).innerHTML).toBeDefined();
    expect(getByText(/4,500/g).innerHTML).toBeDefined();
    expect(getByText(/3,290/g).innerHTML).toBeDefined();
  });
});
