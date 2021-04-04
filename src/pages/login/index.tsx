import React from 'react';
import { useRouter } from 'next/router';

import { useLoginPageController } from 'src/hooks/login-page-controller';
import { LoginFormCard } from 'src/components/login-form-card';
import { FillLayout } from 'src/styles/login';

function Login() {
  const router = useRouter();
  const {
    form,
    initialValues,
    handleLogin,
    isLoading,
    error,
    handleError
  } = useLoginPageController(router);

  return (
    <FillLayout>
      <LoginFormCard
        form={form}
        initialValues={initialValues}
        handleLogin={handleLogin}
        isLoading={isLoading}
        error={error}
        onCloseError={handleError}
      />
    </FillLayout>
  );
}

export default Login;
