import { customTheme } from './customTheme';

export const antTheme = {
  token: {
    colorPrimary: customTheme.color.primary,
    fontFamily: "'Epilogue',serif",
    colorLink: customTheme.color.primary,
    colorLinkHover: customTheme.color.primaryLight,
    colorLinkActive: customTheme.color.primaryDark,
    borderRadius: '24px',
    colorText: customTheme.textColor.primary,
    fontSizeHeading1: customTheme.textSize.h1,
    fontSizeHeading2: customTheme.textSize.h2,
    fontSizeHeading3: customTheme.textSize.h3,
    fontSizeHeading4: customTheme.textSize.h4,
    fontSizeHeading5: customTheme.textSize.h5,
    colorTextSecondary: customTheme.textColor.secondary,
  },

  components: {
    Button: {
      controlHeightLG: customTheme.size.xlg,
    },
    Input: {
      controlHeightLG: customTheme.size.xlg,
    },
    Menu: {
      controlHeightLG: customTheme.size.lg,
    },
    NavLink: {
      motionUnit: '.01s',
    },
    Typography: {
      colorTextSecondary: customTheme.textColor.secondary,
    },
  },
};
