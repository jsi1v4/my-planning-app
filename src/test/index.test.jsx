import React from 'react';
import { render } from '@testing-library/react';

import Home from '../pages/index';

describe('Index component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Home />, {});
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render text component', async () => {
    const { getByText } = render(<Home />, {});
    expect(getByText('Hello World!!!').innerHTML).toBeDefined();
  });
});
