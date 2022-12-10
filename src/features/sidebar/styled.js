import styled from '@emotion/styled';

const SidebarWrapper = styled.div(({ theme }) => ({
  [theme.breakpoint.md.up]: {
    backgroundColor: 'transparent',
    position: 'sticky',
  },
  zIndex: 9,
  top: 0,
  height: '100vh',
  '.styled-sidebar': {
    backgroundColor: 'white',
    height: '100%',
    [theme.breakpoint.md.up]: {
      flex: '0 0 220px !important',
      width: '220px !important',
      minWidth: '220px !important',
      maxWidth: '220px !important',
      backgroundColor: 'transparent',
    },
  },

  '.styled-logo': {
    display: 'flex',
    justifyContent: 'center',
    margin: '20px 0px',
  },
  '.ant-layout-sider-zero-width-trigger': {
    top: 0,
    borderRadius: '0 4px 4px 0',
    background: 'transparent',
    color: theme.gray[500],
  },
  '.styled-logout-section': {
    position: 'absolute',
    color: theme.gray[100],
    bottom: 0,
    height: '6rem',
    width: '100%',
    display: ' flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    '& >*': {
      margin: '.2rem',
    },
    [theme.breakpoint.md.up]: {
      display: 'none',
    },
  },
  '& .ant-layout-sider-collapsed': {
    '& .styled-logout-section': {
      display: 'none',
    },
  },
}));

export default SidebarWrapper;
