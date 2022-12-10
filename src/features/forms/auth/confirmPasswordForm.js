import React, { useContext } from 'react';
import { Button, Form, Input, Space } from 'antd';
import { StyledForm } from '../../../components/styled';
import { useTranslation } from 'react-i18next';
import { SubmitButton } from '../../../components/button/customButton';
import { KeyOutlined } from '@ant-design/icons';
import Icon from '../../../components/Icon/Icon';
import { appUrls } from '../../../utils/constraints/appUrls';
import { useNavigate } from 'react-router';
import ResetPasswordContext, {
  dispatchType,
  resetPasswordPage,
} from '../../../context/resetPasswordContext';

const ConfirmPasswordForm = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { dispatch } = useContext(ResetPasswordContext);

  const onFinish = formData => {
    if (formData) {
      dispatch({ type: dispatchType.otp, payload: '' });
      dispatch({ type: dispatchType.phoneNumber, payload: '' });
      dispatch({
        type: dispatchType.page,
        payload: resetPasswordPage.success,
      });
    }
  };
  return (
    <StyledForm
      name="basic"
      form={form}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      layout={'vertical'}
    >
      <Form.Item
        name="password"
        label={t('New password')}
        rules={[{ required: true }]}
      >
        <Input.Password
          prefix={<Icon component={KeyOutlined} />}
          placeholder={t('Type your password')}
        />
      </Form.Item>

      <Form.Item
        name="confirm_password"
        dependencies={['password']}
        label={t('Confirm password')}
        rules={[
          { required: true, message: 'Please confirm your password!' },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error('The two passwords that you entered do not match!'),
              );
            },
          }),
        ]}
      >
        <Input.Password
          prefix={<Icon component={KeyOutlined} />}
          placeholder={t('Confirm your password')}
        />
      </Form.Item>

      <Form.Item className={'mt-3'}>
        <SubmitButton>Reset password</SubmitButton>
      </Form.Item>
      <Space align="center" style={{ width: '100%' }} direction={'vertical'}>
        <Button
          type={'link'}
          style={{
            textAlign: 'center',
            fontSize: '14px',
            padding: 0,
            height: 'auto',
          }}
          onClick={async () => {
            await dispatch({ type: dispatchType.reset });
            navigate(`/${appUrls.login}`);
          }}
        >
          {t('Back to login')}
        </Button>
      </Space>
    </StyledForm>
  );
};

export default ConfirmPasswordForm;
