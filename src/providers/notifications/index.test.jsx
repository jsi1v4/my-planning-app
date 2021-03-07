import React from 'react';
import { render } from '@testing-library/react';

import { NotificationsProvider } from './index';
import { NotificationsMock } from './mock';

describe('NotificationsProvider component', () => {
  it('should render providers', () => {
    const { asFragment } = render(<NotificationsProvider />);
    expect(asFragment()).toBeDefined();
  });

  it('should render mock providers', () => {
    const { asFragment } = render(<NotificationsMock />);
    expect(asFragment()).toBeDefined();
  });
});
