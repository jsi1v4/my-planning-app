import React from 'react';
import { render } from '@testing-library/react';

import { wrapse } from 'src/utils';
import { I18nMock } from 'src/i18n/mock';
import { AuthenticationMock } from 'src/providers/authentication/mock';
import { AppLayout } from './index';

describe('AppLayout component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<AppLayout />, {
      wrapper: wrapse(I18nMock, AuthenticationMock)
    });
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render component', async () => {
    const { getByTestId, getByText } = render(<AppLayout />, {
      wrapper: wrapse(I18nMock, AuthenticationMock)
    });
    expect(getByTestId('app-layout').innerHTML).toBeDefined();
    expect(getByText('Finances Management').innerHTML).toBeDefined();
  });
});
