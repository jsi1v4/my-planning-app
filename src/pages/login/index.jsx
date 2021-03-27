import React from 'react';
import { useRouter } from 'next/router';

import { useLoginPageController } from '../../hooks/login-page-controller';
import { LoginFormCard } from '../../components/login-form-card';
import { FillLayout } from './styles';

function Login() {
  const router = useRouter();
  const { initialValues, handleLogin } = useLoginPageController(router);

  return (
    <FillLayout>
      <LoginFormCard initialValues={initialValues} handleLogin={handleLogin} />
    </FillLayout>
  );
}

export default Login;
