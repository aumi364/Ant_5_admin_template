import React, { useContext } from 'react';
import { LoginContent, LoginWrapper } from '../../../components/styled';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import BrandLogo from '../../../components/brand/brandLogo';
import { SubmitButton } from '../../../components/button/customButton';
import Response from '../../../components/response/response';
import { appUrls } from '../../../utils/constraints/appUrls';
import ResetPasswordContext, {
  dispatchType,
} from '../../../context/resetPasswordContext';

const Success = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { dispatch } = useContext(ResetPasswordContext);
  return (
    <LoginWrapper>
      <BrandLogo />
      <LoginContent>
        <Response
          type={'success'}
          title={'Your password has been reset successfully.'}
          description={'Please use the new password to log in to your account.'}
          action={() => {
            return (
              <SubmitButton
                onClick={async () => {
                  await dispatch({ type: dispatchType.reset });
                  navigate(`/${appUrls.login}`);
                }}
              >
                Login
              </SubmitButton>
            );
          }}
        />
      </LoginContent>
    </LoginWrapper>
  );
};

export default Success;
