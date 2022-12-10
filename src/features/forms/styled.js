import styled from '@emotion/styled';
import OtpField from 'react-otp-field';

export const StyledOtp = styled(OtpField)(({ theme }) => ({
  display: 'flex',
  gap: '.5rem',
  width: '100%',
  flexWrap: 'wrap',
  div: {
    width: 'calc(100% / 6  - .5rem)',
    height: '50px',
    input: {
      width: '100%',
      height: '100%',
      border: `0.08rem solid ${theme.gray[100]}`,
      borderRadius: '12px',
      color: theme.gray[500],
      boxSizing: 'border-box',
      fontSize: '2rem',
      fontWeight: 500,
      textAlign: 'center',

      '&:focus-visible': {
        outline: 'none',
        border: `0.2rem solid ${theme.color.primary}`,
      },
    },
  },
}));
