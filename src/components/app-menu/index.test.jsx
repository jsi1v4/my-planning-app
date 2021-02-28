import React from 'react';
import { render } from '@testing-library/react';

import { LocaleTesting } from '../../utils/testing';
import { AppMenu } from './index';

describe('AppMenu component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<AppMenu />, {
      wrapper: LocaleTesting,
    });
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render component', async () => {
    const { getByTestId, getByText } = render(<AppMenu />, {
      wrapper: LocaleTesting,
    });
    expect(getByTestId('menu').innerHTML).toBeDefined();
    expect(getByText('Home').innerHTML).toBeDefined();
  });
});
