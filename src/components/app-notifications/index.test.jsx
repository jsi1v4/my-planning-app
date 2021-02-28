import React from 'react';
import { render } from '@testing-library/react';

import { LocaleTesting } from '../../utils/testing';
import { Notifications } from './index';

describe('Notifications component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Notifications data={[]} />, {
      wrapper: LocaleTesting,
    });
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render component', async () => {
    const { getByTestId } = render(<Notifications data={[]} />, {
      wrapper: LocaleTesting,
    });
    expect(getByTestId('notes').innerHTML).toBeDefined();
  });

  it('should render children components', async () => {
    const { getByTestId } = render(
      <>
        <Notifications.Icon />
        <Notifications.Content data={['']} />
      </>
    );
    expect(getByTestId('icon').innerHTML).toBeDefined();
    expect(getByTestId('content').innerHTML).toBeDefined();
    expect(getByTestId('content-item').innerHTML).toBeDefined();
  });
});
