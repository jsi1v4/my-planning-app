import React from 'react';
import { render } from '@testing-library/react';

import { I18nMock } from 'src/i18n/mock';
import { LoginFormCard } from './index';

describe('LoginFormCard component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<LoginFormCard />, {
      wrapper: I18nMock
    });
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render component', async () => {
    const { getByTestId } = render(<LoginFormCard />, {
      wrapper: I18nMock
    });
    expect(getByTestId('username').innerHTML).toBeDefined();
    expect(getByTestId('password').innerHTML).toBeDefined();
  });
});
