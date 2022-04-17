const mainColors = {
  cyan: '#0BCAD4',
  dark: '#112340',
  gray: '#7D8797',
};

export const colors = {
  primary: mainColors.cyan,
  secondary: mainColors.dark,
  text: {
    primary: mainColors.dark,
    secondary: mainColors.gray,
  },
  button: {
    primary: {
      background: colors.primary,
      text: 'white',
    },
    secondary: {
      background: 'white',
      text: 'black',
    },
  },
};
