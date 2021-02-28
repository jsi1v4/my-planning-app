import React from 'react';
import { render } from '@testing-library/react';

import { EN_US } from '../../config';
import { I18nSwitch } from './index';

describe('I18nSwitch component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<I18nSwitch />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render component', async () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <I18nSwitch value={EN_US} onChange={handleClick} />
    );
    expect(getByText('English').innerHTML).toBeDefined();
    expect(getByText('Português').innerHTML).toBeDefined();
  });
});
