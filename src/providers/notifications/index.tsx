import React, { createContext, useContext, useState } from 'react';

import { INotificationsContext } from './types';

export const NotificationsContext = createContext<INotificationsContext>(
  null as never
);

export const useNotifications = () => useContext(NotificationsContext);

export function NotificationsProvider({ children }) {
  const [data] = useState<string[]>([]);

  return (
    <NotificationsContext.Provider
      value={{
        data
      }}
    >
      {children}
    </NotificationsContext.Provider>
  );
}

export default NotificationsProvider;
