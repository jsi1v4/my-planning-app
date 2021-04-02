import React from 'react';
import { render } from '@testing-library/react';

import { NotificationsContext } from './index';

describe('NotificationsProvider component', () => {
  it('should render providers', () => {
    const { asFragment } = render(
      <NotificationsContext.Provider
        value={{
          data: []
        }}
      />
    );
    expect(asFragment()).toBeDefined();
  });
});
