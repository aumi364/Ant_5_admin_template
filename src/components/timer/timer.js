import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Typography } from 'antd';
import { StyledTextButton } from '../button/styled';
import { Flex } from '../styled';
import { useTranslation } from 'react-i18next';

const Timer = ({ minutes, resendOtp, seconds, setSeconds }) => {
  const { t } = useTranslation();
  const { Text } = Typography;

  // useEffect(() => {
  //   setSeconds(second);
  // }, [second]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0 && seconds < 60) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  // const resendOtp = () => {
  //   // callback?.();
  //   setMinutes(1);
  //   setSeconds(0);
  // };
  console.log(seconds);
  return (
    <Flex fullWidth justify={'space-between'}>
      <Text type={'secondary'} strong>
        {minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </Text>
      {seconds <= 0 && (
        <StyledTextButton type={'text'} onClick={resendOtp}>
          <Text strong type={'secondary'}>
            {t('Resend otp')}
          </Text>
        </StyledTextButton>
      )}
    </Flex>
  );
};

Timer.propTypes = {
  minute: PropTypes.number,
  resend: PropTypes.bool,
};

export default Timer;
