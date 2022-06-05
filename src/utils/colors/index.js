const mainColors = {
  cyan: '#0BCAD4',
  lightCyan: '#EDFCFD',
  dark: '#112340',
  gray: '#7D8797',
  lightGray: '#E9E9E9',
  disable: '#B1B7C2',
  mediumGray: '#EDEEF0',
  blue: '#0066CB',
  blackTransparent: 'rgba(0, 0, 0, 0.5)',
  red: '#E06379',
};

export const colors = {
  primary: mainColors.cyan,
  secondary: mainColors.dark,
  tetriary: mainColors.blue,
  white: 'white',
  black: 'black',
  gray: mainColors.gray,
  input: mainColors.mediumGray,
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
    disable: {
      background: mainColors.lightGray,
      text: mainColors.disable,
    },
  },
  cardCategory: mainColors.lightCyan,
  border: mainColors.lightGray,
  loadingBackground: mainColors.blackTransparent,
  error: mainColors.red,
};
