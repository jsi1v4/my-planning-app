import { useState } from 'react';
import { NextRouter } from 'next/router';
import { Form } from 'antd';

import { useAuth } from 'src/authentication';
import { LoginProps } from 'src/authentication/types';

export function useLoginPageController(router: NextRouter) {
  const { authOn } = useAuth();
  const [form] = Form.useForm();
  const initialValues: LoginProps = { remember: true };
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const values = await form.validateFields();
      await authOn(values);
      router.push('/');
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleError = () => {
    setError('');
  };

  return {
    form,
    initialValues,
    handleLogin,
    isLoading,
    error,
    handleError
  };
}

export default useLoginPageController;
