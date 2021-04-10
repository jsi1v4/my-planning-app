import React from 'react';

import { useLoginPageController } from 'src/hooks/login-page-controller';
import { LoginFormCard } from 'src/components/login-form-card';
import { FillLayout } from 'src/styles/login';

function Login() {
  const {
    form,
    initialValues,
    handleLogin,
    isLoading,
    error,
    handleError
  } = useLoginPageController();

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
