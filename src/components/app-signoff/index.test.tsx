import React from 'react';
import { render } from '@testing-library/react';

import { wrapse } from 'src/utils';
import { I18nMock } from 'src/i18n/mock';
import { AuthenticationMock } from 'src/authentication/mock';
import { Signoff } from './index';

describe('Signoff component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Signoff />, {
      wrapper: wrapse(I18nMock, AuthenticationMock)
    });
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render component', async () => {
    const { getByTestId } = render(<Signoff />, {
      wrapper: wrapse(I18nMock, AuthenticationMock)
    });
    expect(getByTestId('sign-out').innerHTML).toBeDefined();
  });
});
