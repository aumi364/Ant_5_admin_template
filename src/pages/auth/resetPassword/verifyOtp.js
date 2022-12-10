import React from 'react';
import { LoginContent, LoginWrapper } from '../../../components/styled';

import BrandLogo from '../../../components/brand/brandLogo';
import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import VerifyOtpForm from '../../../features/forms/auth/verifyOtpForm';

const Login = () => {
  const { Title, Text } = Typography;
  const { t } = useTranslation();

  // useEffect(() => {
  //   if (token) {
  //     setRedirectToReferrer(true);
  //   }
  // }, [token]);
  //
  // const { from } = location.state || {
  //   from: { pathname: `/dashboard` },
  // };
  //
  // if (redirectToReferrer) {
  //   return <Navigate to={from} />;
  // }

  return (
    <LoginWrapper>
      {/* <LangSwithcer /> */}
      <BrandLogo />
      <LoginContent>
        <Title
          level={1}
          style={{ marginBottom: '1rem', whiteSpace: 'pre-wrap' }}
        >
          {t('Verify yourself')}
        </Title>
        <Text type="secondary">{t('otpVerifyMessage')}</Text>
        <VerifyOtpForm />
      </LoginContent>
    </LoginWrapper>
  );
};

export default Login;
