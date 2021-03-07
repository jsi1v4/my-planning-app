import React from 'react';

import { NotificationsContext } from './index';

export function NotificationsMock({ children }) {
  return (
    <NotificationsContext.Provider
      value={{
        data: [],
      }}
    >
      {children}
    </NotificationsContext.Provider>
  );
}

export default NotificationsMock;
