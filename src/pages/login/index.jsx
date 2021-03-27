import React from 'react';
import { useRouter } from 'next/router';
import { Card, Form, Input, Checkbox, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { useI18n } from '../../i18n';
import { useLoginPageController } from '../../hooks/login-page-controller';
import { FillLayout } from './styles';

function Login() {
  const t = useI18n();
  const router = useRouter();
  const { initialValues, handleLogin } = useLoginPageController(router);

  return (
    <FillLayout>
      <Card>
        <Form
          name="form_login"
          initialValues={initialValues}
          onFinish={handleLogin}
        >
          <Form.Item
            name="username"
            rules={[
              { required: true, message: t('app_login_message-username') }
            ]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder={t('app_login_label-username')}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              { required: true, message: t('app_login_message-password') }
            ]}
          >
            <Input
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
    </FillLayout>
  );
}

export default Login;
