import React from 'react';
import { Form, Input, Space, Typography } from 'antd';
import { authStore } from '../../../store/auth';
import { Flex, StyledForm } from '../../../components/styled';
import { useTranslation } from 'react-i18next';
import { SubmitButton } from '../../../components/button/customButton';
import { KeyOutlined, PhoneOutlined } from '@ant-design/icons';
import Icon from '../../../components/Icon/Icon';
import { NavLink } from 'react-router-dom';
import { appUrls } from '../../../utils/constraints/appUrls';
import toast from 'react-hot-toast';
import { prefixCode } from '../../../utils/helpers/addPhoneNumberPrefix';

const UserAuthForm = () => {
  const login = authStore(state => state?.login);
  const { t } = useTranslation();
  const { Text } = Typography;

  const onFinish = formData => {
    if (formData) {
      login({ access: 'dummyjwttoken', user: { name: 'dummy' } });
      toast.success('Successfully logged in');
    }
  };
  return (
    <StyledForm
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      layout={'vertical'}
    >
      <Form.Item
        name="phone_number"
        label={t('Phone')}
        rules={[{ required: true, message: `Phone number is required` }]}
      >
        <Input
          type={'number'}
          prefix={
            <Flex align={'center'} gap={'.5rem'}>
              <Icon component={PhoneOutlined} />
              <Text type="secondary" style={{ fontSize: 'inherit' }}>
                {prefixCode}
              </Text>
            </Flex>
          }
          placeholder={t('Type your phone')}
        />
      </Form.Item>

      <Form.Item
        name="password"
        label={t('Password')}
        rules={[{ required: true }]}
      >
        <Input.Password
          prefix={<Icon component={KeyOutlined} />}
          placeholder={t('Type your password')}
        />
      </Form.Item>

      <Form.Item className={'mt-3'}>
        <SubmitButton>{t('Submit')}</SubmitButton>
      </Form.Item>

      <Space align="center" style={{ width: '100%' }} direction={'vertical'}>
        <NavLink
          to={`/${appUrls.resetPassword}`}
          style={{ textAlign: 'center' }}
        >
          {t('Reset your password?')}
        </NavLink>
      </Space>
    </StyledForm>
  );
};

export default UserAuthForm;
