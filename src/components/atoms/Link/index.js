import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../utils';

export default function Link({text, size, align}) {
  return (
    <View>
      <Text style={styles.text(size, align)}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: (size, align) => ({
    fontSize: size,
    color: colors.gray,
    fontFamily: 'PlusJakartaSans-Regular',
    textDecorationLine: 'underline',
    textAlign: align,
  }),
});