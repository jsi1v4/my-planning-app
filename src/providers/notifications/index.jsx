import React, { createContext, useState } from 'react';

export const NotificationsContext = createContext(null);

export function NotificationsProvider({ children }) {
  const [data] = useState([]);

  return (
    <NotificationsContext.Provider
      value={{
        data,
      }}
    >
      {children}
    </NotificationsContext.Provider>
  );
}

export default NotificationsProvider;
