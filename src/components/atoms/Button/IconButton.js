import React from 'react';
import {TouchableOpacity} from 'react-native';
import {IconBackDark} from '../../../assets';

const IconButton = ({onPress, icon}) => {
  const Icon = () => {
    if (icon === 'back-dark') {
      return <IconBackDark />;
    }

    if (icon === 'back-light') {
      return <IconBackDark />;
    }

    return <IconBackDark />;
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default IconButton;
