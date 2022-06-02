import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';

export default function Link({text, size, align, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text(size, align)}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: (size, align) => ({
    fontSize: size,
    color: colors.gray,
    fontFamily: fonts.primary[400],
    textDecorationLine: 'underline',
    textAlign: align,
  }),
});
