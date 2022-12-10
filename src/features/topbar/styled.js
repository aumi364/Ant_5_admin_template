import styled from '@emotion/styled';
import { Switch } from 'antd';

const TopbarWrapper = styled.div(({ theme }) => ({
  '.styled-topbar': {
    backgroundColor: theme.color.white,
    boxShadow: 'rgba(17, 17, 26, 0.1) 0px 1px 0px',
    color: theme.color.white,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '2rem 2rem ',
    [theme.breakpoint.md.up]: {
      backgroundColor: 'transparent',
      boxShadow: 'none',
    },
  },
  '.styled-avatar': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  '.user-details': {
    display: 'flex',
    flexDirection: 'column',
    lineHeight: 'initial',
    textAlign: 'end',
  },
}));
export const StyledSwitch = styled(Switch)(({ flag, theme }) => ({
  '.ant-switch-handle::before': {
    backgroundColor: flag === 'sv' ? '#006AA7' : '#002868',
  },
  '&&&': {
    background: flag === 'sv' ? theme.color.primaryLight : '#BF0A30',
  },
}));
export default TopbarWrapper;
