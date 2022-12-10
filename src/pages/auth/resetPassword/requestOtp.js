import React, { useState } from 'react';
import { LoginContent, LoginWrapper } from '../../../components/styled';
import { authStore } from '../../../store/auth';

import BrandLogo from '../../../components/brand/brandLogo';
import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import RequestOtpForm from '../../../features/forms/auth/requestOtpForm';

const Login = () => {
  const token = authStore(state => state?.token);
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);
  const { Title, Text } = Typography;
  const { t } = useTranslation();

  // console.log(t);
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
          {t('Verify your phone number')}
        </Title>
        <Text type="secondary">{t('otpRequestInstruction')}</Text>
        <RequestOtpForm />
      </LoginContent>
    </LoginWrapper>
  );
};

export default Login;
