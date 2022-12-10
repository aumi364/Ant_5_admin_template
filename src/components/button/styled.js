import styled from '@emotion/styled';
import { Button } from 'antd';

export const StyledButton = styled(Button)(({ theme, custom }) => {
  return (
    custom && {
      background: 'white',
      color: theme.gray[400],
      '&:hover, &:focus': {
        color: theme.color.primary,
      },
    }
  );
});

export const StyledTextButton = styled(Button)(({ theme }) => ({
  '&&&': {
    padding: '0',
    height: 'auto',
    '&:hover': {
      '.ant-typography': {
        color: theme.gray[300],
      },
      background: 'transparent',
    },
  },
}));
