const {showMessage} = require('react-native-flash-message');
import {colors} from '../colors';

export const showError = message => {
  showMessage({
    message: message,
    type: 'danger',
    backgroundColor: colors.error,
    color: colors.white,
  });
};

export const showSuccess = message => {
  showMessage({
    message: message,
    type: 'success',
    color: colors.white,
  });
};
