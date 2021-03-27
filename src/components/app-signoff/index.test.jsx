import React from 'react';
import { render } from '@testing-library/react';

import { wrapse } from '../../utils';
import { I18nMock } from '../../i18n/mock';
import { AuthenticationMock } from '../../authentication/mock';
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
