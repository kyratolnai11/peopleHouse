export type ColorTheme = {
  primary: string;
  secondary: string;
  tertiary: string;
  textSecondary: string;
  textPrimary: string;
  buttonBackground: string;
  primaryBackground: string;
  secondaryBackground: string;
  tertiaryBackground: string;
};

const sharedColors = {
  black: "#000000",
  white: "#FFFFFF",
  grey: "#b2b2b0",
  lightGrey: "#EDF2F7",
  darkGrey: "#969694",
  mediumGrey: "#708299",
};

const extraColors = {
  infoSectionRed: "#730012",
};

type SharedColors = typeof sharedColors;
type ExtraColors = typeof extraColors;

export type TColors = ColorTheme & SharedColors & ExtraColors;

type ColorPalettes = {
  light: TColors;
  dark: TColors;
};

const Colors: ColorPalettes = {
  dark: {
    primary: "#FFD400", //peoplehouse yellow
    secondary: "#9E76B4", //peoplehouse purple
    tertiary: "#EDBA00", //darker yellow
    textPrimary: sharedColors.white,
    textSecondary: "#67686E",
    buttonBackground: "#EDBA00", //also darker yellow here, but we will see
    primaryBackground: sharedColors.black,
    secondaryBackground: "#663D78DF", //darker transparent lavender for sections
    tertiaryBackground: "#708299", //dark grey for Homestay
    ...sharedColors,
    ...extraColors,
  },
  light: {
    primary: "#FFD400", //Peoplehouse yellow
    secondary: "#9E76B4", //Peoplehouse purple
    tertiary: "#EDBA00", //darker yellow
    textPrimary: sharedColors.black,
    textSecondary: sharedColors.white,
    buttonBackground: "#FFD400",
    primaryBackground: sharedColors.white,
    secondaryBackground: "#CCA3DE33", //transparent lavender for sections
    tertiaryBackground: "#F1F1F1", //light grey for Homestay
    ...sharedColors,
    ...extraColors,
  },
};

export default Colors;
