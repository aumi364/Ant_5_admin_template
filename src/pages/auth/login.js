import React, { useEffect, useState } from 'react';
import { LoginContent, LoginWrapper } from '../../components/styled';
import { authStore } from '../../store/auth';
import { Navigate } from 'react-router';

import BrandLogo from '../../components/brand/brandLogo';
import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import UserAuthForm from '../../features/forms/auth/userAuthForm';

const Login = () => {
  const token = authStore(state => state?.token);
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);
  const { Title, Text } = Typography;
  const { t } = useTranslation();

  useEffect(() => {
    if (token) {
      setRedirectToReferrer(true);
    }
  }, [token]);

  const { from } = location.state || {
    from: { pathname: `/dashboard` },
  };

  if (redirectToReferrer) {
    return <Navigate to={from} />;
  }

  return (
    <LoginWrapper>
      {/* <LangSwithcer /> */}
      <BrandLogo />
      <LoginContent>
        <Title
          level={1}
          style={{ marginBottom: '1rem', whiteSpace: 'pre-wrap' }}
        >
          {t('Login to continue')}
        </Title>
        <Text type="secondary">{t('otpRequestInstruction')}</Text>
        <UserAuthForm />
      </LoginContent>
    </LoginWrapper>
  );
};

export default Login;
