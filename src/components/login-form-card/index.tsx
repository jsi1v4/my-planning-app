import React from 'react';
import { Card, Form, Input, Checkbox, Button } from 'antd';
import { FormInstance } from 'antd/lib/form';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { useI18nMessage } from 'src/i18n';
import { LoginProps } from 'src/providers/authentication/types';

import { CustomAlert } from './styles';

export interface LoginFormCardProps {
  form?: FormInstance;
  initialValues?: LoginProps;
  handleLogin?: () => void;
  isLoading?: boolean;
  error?: string;
  onCloseError?: () => void;
}

export function LoginFormCard({
  form,
  initialValues,
  handleLogin,
  isLoading,
  error,
  onCloseError
}: LoginFormCardProps) {
  const t = useI18nMessage();

  return (
    <Card bordered={false}>
      <Form
        name="form_login"
        form={form}
        initialValues={initialValues}
        onFinish={handleLogin}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: t('login-message-username') }]}
        >
          <Input
            data-testid="username"
            prefix={<UserOutlined />}
            placeholder={t('login-label-username')}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: t('login-message-password') }]}
        >
          <Input
            data-testid="password"
            prefix={<LockOutlined />}
            type="password"
            placeholder={t('login-label-password')}
          />
        </Form.Item>
        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>{t('login-label-rememberme')}</Checkbox>
        </Form.Item>

        <Button type="primary" htmlType="submit" loading={isLoading} block>
          {t('login-btn-login')}
        </Button>

        {error && (
          <CustomAlert
            message={t('login-error-label')}
            description={error}
            type="error"
            onClose={onCloseError}
            closable
          />
        )}
      </Form>
    </Card>
  );
}

export default LoginFormCard;
