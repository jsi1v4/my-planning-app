import { useContext, useEffect } from 'react';

import { AuthenticationContext } from '../../authentication';

export function useLoginPageController(router) {
  const { authOn } = useContext(AuthenticationContext);

  const initialValues = { remember: true };

  const handleLogin = () => {
    authOn();
    router.push('/');
  };

  useEffect(() => {
    console.log('### TEST');
  }, []);

  return {
    initialValues,
    handleLogin
  };
}

export default useLoginPageController;
