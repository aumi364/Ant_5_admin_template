import styled from '@emotion/styled';
import { Avatar, Button, Form, Menu } from 'antd';

export const AlignCenterWrapper = styled.div({
  height: '100vh',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const LoginWrapper = styled.div(({ theme }) => ({
  background: theme.color.background,
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  '& > *': {
    marginTop: '5rem',
  },
  [theme.breakpoint.sm.up]: {
    '& > *': {
      marginTop: '3rem',
    },
  },
}));

export const LoginContent = styled.div(({ theme }) => ({
  padding: '1.5rem',
  backgroundColor: 'transparent',
  h1: {
    fontSize: theme.textSize.h2,
  },
  [theme.breakpoint.sm.up]: {
    width: '40rem',
    backgroundColor: theme.color.white,
    borderRadius: '0.8rem',
    display: 'flex',
    padding: '4rem',
    flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'center',
    gap: '.5rem',
    flexWrap: 'wrap',
    h1: {
      fontSize: theme.textSize.h1,
    },
  },
}));

export const StyledForm = styled(Form)({
  width: '100%',
});

export const DashboardContainer = styled.div(({ theme }) => ({
  '.styledLayout': {
    minHeight: '100vh',
  },
  '.styledContent': {
    padding: '1.25rem',
    [theme.breakpoint.md.up]: {
      padding: '1rem 2rem 3rem 2rem',
    },
  },
}));

export const StyledTableWrapper = styled.div(({ theme }) => ({
  borderRadius: '12px',
  '.styledTableFilterSection': {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '.2rem',
    paddingBottom: '.8rem',
    '& > *': {
      flex: '1 1 0',
    },
  },

  '.ant-pagination': {
    marginRight: '1rem',
  },

  '.ant-select': {
    padding: 0,
  },

  [theme.breakpoint.sm.up]: {
    background: 'white',
    '.styledTableFilterSection': {
      display: 'flex',
      flexWrap: 'wrap',
      padding: '.8rem',
      gap: '.5rem',
      '& > *': {
        flex: 'none',
      },
    },
  },
}));

export const StyledContainer = styled.div(({ theme, noPadding }) => ({
  padding: '.8rem 0',
}));

export const Logo = styled.img({ width: '40px' });

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: theme.gray[300],
}));

export const Flex = styled.div(
  ({
    align = 'flex-start',
    justify = 'flex-start',
    column,
    fullWidth,
    gap,
    wrap,
  }) => ({
    display: 'flex',
    justifyContent: justify,
    alignItems: align,
    flexWrap: wrap ? 'wrap' : 'nowrap',
    flexDirection: column ? 'column' : 'row',
    width: fullWidth && '100%',
    gap: gap,
  }),
);
export const DropdownButton = styled(Button)(({ theme }) => ({
  background: 'white',
  width: '100%',
}));

export const NavigationMenu = styled(Menu)(({ theme }) => ({
  backgroundColor: 'transparent',
  borderInlineEnd: 'none !important',
  '.ant-menu-item': {
    svg: {
      transition: '0.1s',
      fontSize: '20px',
    },
    a: {
      transition: '0.1s',
    },
  },
  '.ant-menu-item.ant-menu-item-selected': {
    color: theme.color.white,
    backgroundColor: theme.color.primary,
  },
}));
