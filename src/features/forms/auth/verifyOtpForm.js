import React, { useContext, useState } from 'react';
import { Button, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import { StyledOtp } from '../styled';
import { Flex } from '../../../components/styled';
import { SubmitButton } from '../../../components/button/customButton';
import dayjs from 'dayjs';
import ResetPasswordContext, {
  dispatchType,
  resetPasswordPage,
} from '../../../context/resetPasswordContext';
import Timer from '../../../components/timer/timer';
import toast from 'react-hot-toast';

const UserAuthForm = () => {
  const { t } = useTranslation();
  // const { values } = useContext(resetPasswordContext);
  const { values, dispatch } = useContext(ResetPasswordContext);

  const currentTime = dayjs().format();
  const [otp, setOtp] = useState('');
  const [minutes, setMinutes] = useState(0);
  const persistedDifference = dayjs(values.otpCreatedAt)
    .add(59, 'seconds')
    .diff(currentTime, 'seconds');
  const [seconds, setSeconds] = useState(
    persistedDifference > 0 ? persistedDifference : 0,
  );

  const resendOtp = async () => {
    setSeconds(59);
  };
  const verifyOtp = async () => {
    dispatch({
      type: dispatchType.page,
      payload: resetPasswordPage.confirmPassword,
    });
    dispatch({ type: dispatchType.otp, payload: otp });
    toast.success('Successfully verified!!');
  };

  return (
    <Flex column gap={'2rem'}>
      <StyledOtp
        value={otp}
        onChange={setOtp}
        numInputs={6}
        onChangeRegex={/^([0-9]{0,})$/}
        autoFocus
      />
      <SubmitButton disabled={seconds <= 0} onClick={verifyOtp}>
        {t('Verify')}
      </SubmitButton>
      <Timer
        seconds={seconds}
        resendOtp={resendOtp}
        setSeconds={setSeconds}
        minutes={minutes}
        setMinutes={setMinutes}
      />
      <Space align="center" style={{ width: '100%' }} direction={'vertical'}>
        <Button
          type={'link'}
          style={{
            textAlign: 'center',
            fontSize: '14px',
            padding: 0,
            height: 'auto',
          }}
          onClick={() => dispatch({ type: dispatchType.reset })}
        >
          {t('Change phone number ?')}
        </Button>
      </Space>
    </Flex>
  );
};

export default UserAuthForm;
