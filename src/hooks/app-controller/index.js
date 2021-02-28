import { useState } from 'react';

import { INIT_LOCALE } from '../../config';

export function useAppController() {
  const [locale, setLocale] = useState(INIT_LOCALE);
  const [userName] = useState('John Doe');
  const [notesData] = useState([]);

  const signOut = () => {
    console.log('SIGNOUT');
  };

  const handleLocale = (value) => {
    setLocale(value);
  };

  return {
    locale,
    handleLocale,
    signOut,
    userName,
    notesData,
  };
}

export default useAppController;
