import React from 'react';
import { render } from '@testing-library/react';

import { I18nMock } from 'src/i18n/mock';
import { TagCurrency } from './index';

describe('TagCurrency component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<TagCurrency withicon validate />, {
      wrapper: I18nMock
    });
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render component', async () => {
    const { getByText } = render(<TagCurrency value={1000} />, {
      wrapper: I18nMock
    });
    expect(getByText(/1,000/g).innerHTML).toBeDefined();
  });
});
