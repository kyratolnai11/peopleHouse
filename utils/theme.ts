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

const extraColors = {
  black: "#000000",
  white: "#FFFFFF",
  grey: "#b2b2b0",
  lightGrey: "#EDF2F7",
  mediumGrey: "#708299",
  extraLightGrey: "#F1F1F1",
  darkGrey: "#969694",
  infoSectionRed: "#730012",
};

type ExtraColors = typeof extraColors;

export type TColors = ColorTheme & ExtraColors;

type ColorPalettes = {
  light: TColors;
};

const Colors: ColorPalettes = {
  light: {
    primary: "#FFD400", //Peoplehouse yellow
    secondary: "#9E76B4", //Peoplehouse purple
    tertiary: "#EDBA00", //darker yellow
    textPrimary: extraColors.black,
    textSecondary: extraColors.white,
    buttonBackground: "#FFD400",
    primaryBackground: extraColors.white,
    secondaryBackground: "#CCA3DE33", //transparent lavender for sections
    tertiaryBackground: "#F1F1F1", //light grey for Homestay
    ...extraColors,
    ...extraColors,
  },
};

export default Colors;
