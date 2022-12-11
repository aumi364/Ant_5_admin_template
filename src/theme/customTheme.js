export const mq = (breakpoint, screen) => {
  return screen === 'up'
    ? `@media (min-width: ${breakpoint}px)`
    : `@media (max-width: ${breakpoint}px)`;
};
const gray = {
  500: '#09284C',
  400: '#1e3148',
  300: '#587388',
  200: '#475560',
  100: '#ABBAC7',
};
const color = {
  primary: '#EB706E',
  primaryLight: '#EB9694',
  primaryDark: '#E45A57',
  white: '#FFFFFF',
  warning: '#FF5C00',
  error: '#FC0000',
  background: '#F6F7F8',
  success: '#01B428',
};
const screenSize = {
  xs: 480,
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1500,
  xxl: 1920,
};
export const customTheme = {
  gray: gray,
  color: color,

  textColor: {
    primary: gray[500],
    secondary: gray[300],
    success: color.success,
    warning: color.warning,
    danger: color.danger,
    blue: color.primary,
  },
  size: {
    xlg: 48,
    lg: 40,
    base: 36,
    sm: 24,
  },
  screenSize: screenSize,
  textSize: {
    h1: '40px',
    h2: '32px',
    h3: '24px',
    h4: '20px',
    h5: '18px',
    base: '16px',
    sm: '14px',
  },
  breakpoint: {
    xs: {
      up: mq(screenSize.xs, 'up'),
      down: mq(screenSize.xs, 'down'),
    },
    sm: {
      up: mq(screenSize.sm, 'up'),
      down: mq(screenSize.sm, 'down'),
    },
    md: {
      up: mq(screenSize.md, 'up'),
      down: mq(screenSize.md, 'down'),
    },
    lg: {
      up: mq(screenSize.lg, 'up'),
      down: mq(screenSize.lg, 'down'),
    },
    xl: {
      up: mq(screenSize.xl, 'up'),
      down: mq(screenSize.xl, 'down'),
    },
    xxl: {
      up: mq(screenSize.xxl, 'up'),
      down: mq(screenSize.xxl, 'down'),
    },
  },
};
