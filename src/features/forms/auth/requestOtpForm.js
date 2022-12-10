import React, { useContext } from 'react';
import { Button, Form, Input, Space, Typography } from 'antd';
import { Flex, StyledForm } from '../../../components/styled';
import { useTranslation } from 'react-i18next';
import { PhoneOutlined } from '@ant-design/icons';
import Icon from '../../../components/Icon/Icon';
import { SubmitButton } from '../../../components/button/customButton';
import { useNavigate } from 'react-router';
import ResetPasswordContext, {
  dispatchType,
  resetPasswordPage,
} from '../../../context/resetPasswordContext';
import { appUrls } from '../../../utils/constraints/appUrls';
import {
  addPhoneNumberPrefix,
  prefixCode,
} from '../../../utils/helpers/addPhoneNumberPrefix';

const RequestOtpForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { Text } = Typography;
  const { dispatch } = useContext(ResetPasswordContext);

  const onFinish = formData => {
    if (formData) {
      dispatch({
        type: dispatchType.page,
        payload: resetPasswordPage.verifyOtp,
      });
      dispatch({
        type: dispatchType.phoneNumber,
        payload: addPhoneNumberPrefix(formData.phone_number),
      });
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
        type={'number'}
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

      <Form.Item className={'mt-3'}>
        <SubmitButton>Submit</SubmitButton>
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
          onClick={() => navigate(`/${appUrls.login}`)}
        >
          {t('Back to login')}
        </Button>
      </Space>
    </StyledForm>
  );
};

export default RequestOtpForm;
