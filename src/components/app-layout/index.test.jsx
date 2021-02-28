import React from 'react';
import { render } from '@testing-library/react';

import { LocaleTesting } from '../../utils/testing';
import { AppLayout } from './index';

describe('AppLayout component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<AppLayout />, {
      wrapper: LocaleTesting,
    });
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render component', async () => {
    const { getByTestId, getByText } = render(<AppLayout />, {
      wrapper: LocaleTesting,
    });
    expect(getByTestId('app-layout').innerHTML).toBeDefined();
    expect(getByText('Finances Management').innerHTML).toBeDefined();
  });
});
