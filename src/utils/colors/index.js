const mainColors = {
  cyan: '#0BCAD4',
  lightCyan: '#EDFCFD',
  dark: '#112340',
  gray: '#7D8797',
  lightGray: '#E9E9E9',
};

export const colors = {
  primary: mainColors.cyan,
  secondary: mainColors.dark,
  white: 'white',
  black: 'black',
  gray: mainColors.gray,
  text: {
    primary: mainColors.dark,
    secondary: mainColors.gray,
    menuActive: mainColors.cyan,
    menuInactivce: mainColors.gray,
  },
  button: {
    primary: {
      background: mainColors.cyan,
      text: 'white',
    },
    secondary: {
      background: 'white',
      text: 'black',
    },
  },
  cardCategory: mainColors.lightCyan,
  border: mainColors.lightGray,
};
