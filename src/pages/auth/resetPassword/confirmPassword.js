import React from 'react';
import { LoginContent, LoginWrapper } from '../../../components/styled';

import BrandLogo from '../../../components/brand/brandLogo';
import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import ResetPasswordForm from '../../../features/forms/auth/confirmPasswordForm';

const Login = () => {
  const { Title, Text } = Typography;
  const { t } = useTranslation();

  return (
    <LoginWrapper>
      {/* <LangSwithcer /> */}
      <BrandLogo />
      <LoginContent>
        <Title
          level={1}
          style={{ whiteSpace: 'pre-wrap', marginBottom: '1rem' }}
        >
          {t('Reset password')}
        </Title>

        <Text type="secondary">{t('resetPasswordInstruction')}</Text>
        <ResetPasswordForm />
        {/*<Response*/}
        {/*  type={'success'}*/}
        {/*  title={'Your password has been reset successfully.'}*/}
        {/*  description={'Please use the new password to log in to your account.'}*/}
        {/*  action={() => {*/}
        {/*    return <SubmitButton>Login</SubmitButton>;*/}
        {/*  }}*/}
        {/*/>*/}
      </LoginContent>
    </LoginWrapper>
  );
};

export default Login;
