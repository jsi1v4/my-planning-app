import React from 'react';
import { render } from '@testing-library/react';

import { AuthenticationProvider } from './index';
import { AuthenticationMock } from './mock';

describe('AuthenticationProvider component', () => {
  it('should render providers', () => {
    const { asFragment } = render(<AuthenticationProvider />);
    expect(asFragment()).toBeDefined();
  });

  it('should render mock providers', () => {
    const { asFragment } = render(<AuthenticationMock />);
    expect(asFragment()).toBeDefined();
  });
});
