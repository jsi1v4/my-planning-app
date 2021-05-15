import React from 'react';
import { render } from '@testing-library/react';

import { I18nMock } from 'src/i18n/mock';
import { I18nSwitch } from './index';

describe('I18nSwitch component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<I18nSwitch />, { wrapper: I18nMock });
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render component', async () => {
    const { getByTestId } = render(<I18nSwitch />, { wrapper: I18nMock });
    expect(getByTestId('i18n').innerHTML).toBeDefined();
  });
});
