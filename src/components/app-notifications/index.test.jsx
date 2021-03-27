import React from 'react';
import { render } from '@testing-library/react';

import { wrapse } from '../../utils';
import { I18nMock } from '../../i18n/mock';
import { NotificationsMock } from '../../providers/notifications/mock';
import { Notifications } from './index';

describe('Notifications component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Notifications />, {
      wrapper: wrapse(I18nMock, NotificationsMock)
    });
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render component', async () => {
    const { getByTestId } = render(<Notifications />, {
      wrapper: wrapse(I18nMock, NotificationsMock)
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
