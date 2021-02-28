import React from 'react';
import { render } from '@testing-library/react';

import { LocaleTesting } from '../../utils/testing';
import { Signoff } from './index';

describe('Signoff component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Signoff userName="John Doe" />, {
      wrapper: LocaleTesting,
    });
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render component', async () => {
    const { getByTestId } = render(<Signoff userName="John Doe" />, {
      wrapper: LocaleTesting,
    });
    expect(getByTestId('sign-out').innerHTML).toBeDefined();
  });
});
