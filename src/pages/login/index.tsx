import React from 'react';
import { useRouter } from 'next/router';

import { useLoginPageController } from 'src/hooks/login-page-controller';
import { LoginFormCard } from 'src/components/login-form-card';
import { FillLayout } from 'src/styles/login';

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
