import { useContext } from 'react';
import { NextRouter } from 'next/router';

import { AuthenticationContext } from 'src/authentication';

export function useLoginPageController(router: NextRouter) {
  const { authOn } = useContext(AuthenticationContext);

  const initialValues = { remember: true };

  const handleLogin = () => {
    authOn();
    router.push('/');
  };

  return {
    initialValues,
    handleLogin
  };
}

export default useLoginPageController;
