import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    name: "light" | "dark";
    fonts: {
      family: string;
    };
    spacing: typeof spacing;
    color: typeof color;
    borderRadius: typeof borderRadius;
    boxShadow: typeof boxShadow;
    typography: typeof typography;
  }
}

const baseColors = {
  white: "#FFFFFF",
  black: "#1A1A2E",
  differentBlack: "#16213E",
  grey: {
    base: "#8E8E9A",
    light1: "#A0A0AC",
    light2: "#B8B8C2",
    light3: "#D0D0D8",
    light4: "#E8E8EE",
    light5: "#F3F4F6",
    light6: "#F9FAFB",
    dark1: "#6B6B7B",
    dark2: "#52525E",
    dark3: "#3B3B47",
    dark4: "#2A2A36",
    dark5: "#1E1E2A",
    dark6: "#16161F",
  },
  blue: {
    base: "#6C63FF",
    light1: "#8B83FF",
    light2: "#A9A3FF",
    light3: "#C8C3FF",
    light4: "#E6E3FF",
    light5: "#F2F1FF",
    dark1: "#5A52E0",
    dark2: "#4840C2",
    dark3: "#362FA3",
    dark4: "#241F85",
    dark5: "#121066",
  },
  red: {
    base: "#E63946",
    light1: "#FF6B6B",
    dark1: "#C62828",
    dark2: "#A31D1D",
  },
};

const spaceUnit = 1;

const borderRadius = {
  xs: "4px",
  s: "8px",
  m: "16px",
  l: "24px",
  xl: "32px",
  xxl: "40px",
  round: "50%",
};

const spacing = {
  xxs: `${0.25 * spaceUnit}em`,
  xs: `${0.5 * spaceUnit}em`,
  s: `${spaceUnit}em`,
  m: `${1.25 * spaceUnit}em`,
  l: `${2 * spaceUnit}em`,
  xl: `${3.25 * spaceUnit}em`,
  xxl: `${5.25 * spaceUnit}em`,
};

const boxShadow = {
  card: "0px 14px 26px 0px rgba(0, 0, 0, 0.08)",
  inner: "inset 0 3px 0 0 rgba(0, 0, 0, 0.05)",
  outerBorder: `0 0 0 1px ${baseColors.blue.dark2}, 0 0 0 4px ${baseColors.blue.light5}`,
};

const typography = {
  fontSize: {
    body: "1.125rem",
    bodyS: "1rem",
    bodyXS: "0.9rem",
    bodyXXS: "0.72rem",
    heading1: "2.74rem",
    heading2: "2.19rem",
    heading3: "1.75rem",
    heading4: "1.4rem",
  },
  fontWeight: {
    black: "900",
    bold: "700",
    medium: "500",
    regular: "400",
  },
};

const color = {
  accentText: baseColors.black,
  badgeBackground: baseColors.grey.light5,
  badgeText: baseColors.grey.dark2,
  buttonClear: "transparent",
  buttonClearHover: baseColors.grey.light5,
  buttonPrimary: baseColors.blue.base,
  buttonPrimaryHover: baseColors.blue.dark1,
  buttonSecondary: baseColors.blue.base,
  buttonSecondaryHover: baseColors.blue.dark1,
  buttonText: baseColors.white,
  screenBackground: baseColors.white,
  sidebarHeader: baseColors.grey.dark4,
};

export const lightTheme: DefaultTheme = {
  borderRadius,
  boxShadow,
  color,
  fonts: {
    family: "NunitoSans, sans-serif",
  },
  name: "light",
  spacing,
  typography,
};

export const darkTheme: DefaultTheme = {
  ...lightTheme,
  boxShadow: {
    ...boxShadow,
    outerBorder: `0 0 0 2px ${baseColors.blue.dark5}, 0 0 0 4px ${baseColors.blue.base}`,
  },
  color: {
    ...lightTheme.color,
    screenBackground: baseColors.grey.dark6,
    badgeBackground: baseColors.grey.dark4,
    badgeText: baseColors.grey.light1,
    buttonClearHover: baseColors.grey.dark4,
    buttonPrimary: baseColors.blue.base,
    buttonPrimaryHover: baseColors.blue.dark1,
    buttonSecondary: baseColors.blue.base,
    buttonText: baseColors.white,
    sidebarHeader: baseColors.grey.dark4,
  },
  name: "dark",
};
