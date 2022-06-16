import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../../../utils';
import IconButton from './IconButton';
import SendButton from './SendButton';

const Button = ({type, title, onPress, icon, disable}) => {
  if (type === 'IconButton') {
    return <IconButton icon={icon} onPress={onPress} />;
  }

  if (type === 'SendButton') {
    return <SendButton disable={disable} onPress={onPress} />;
  }

  if (disable) {
    return (
      <View style={styles.disable}>
        <Text style={styles.disableText}>{title}</Text>
      </View>
    );
  }
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor: type === 'secondary' ? colors.white : colors.primary,
    paddingVertical: 10,
    borderRadius: 8,
  }),
  disable: {
    backgroundColor: colors.button.disable.background,
    paddingVertical: 10,
    borderRadius: 8,
  },
  text: type => ({
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: type === 'secondary' ? colors.secondary : colors.white,
  }),
  disableText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: colors.button.disable.text,
  },
});
