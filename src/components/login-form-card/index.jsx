import React from 'react';
import { Card, Form, Input, Checkbox, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { useI18n } from '../../i18n';

export function LoginFormCard({ initialValues, handleLogin }) {
  const t = useI18n();

  return (
    <Card>
      <Form
        name="form_login"
        initialValues={initialValues}
        onFinish={handleLogin}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: t('app_login_message-username') }]}
        >
          <Input
            data-testid="username"
            prefix={<UserOutlined />}
            placeholder={t('app_login_label-username')}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: t('app_login_message-password') }]}
        >
          <Input
            data-testid="password"
            prefix={<LockOutlined />}
            type="password"
            placeholder={t('app_login_label-password')}
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>{t('app_login_label-rememberme')}</Checkbox>
          </Form.Item>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            {t('app_login_btn-login')}
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}

export default LoginFormCard;
