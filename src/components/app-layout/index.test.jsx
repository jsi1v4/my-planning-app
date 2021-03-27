import React from 'react';
import { render } from '@testing-library/react';

import { I18nMock } from '../../i18n/mock';
import { AppLayout } from './index';

describe('AppLayout component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<AppLayout />, {
      wrapper: I18nMock
    });
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render component', async () => {
    const { getByTestId, getByText } = render(<AppLayout />, {
      wrapper: I18nMock
    });
    expect(getByTestId('app-layout').innerHTML).toBeDefined();
    expect(getByText('Finances Management').innerHTML).toBeDefined();
  });
});
