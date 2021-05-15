import React from 'react';
import { render } from '@testing-library/react';

import { I18nMock } from 'src/i18n/mock';
import { FinancesYearHandler } from './index';

describe('FinancesYearHandler component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <FinancesYearHandler value={2021} onChange={jest.fn()} />,
      {
        wrapper: I18nMock
      }
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
