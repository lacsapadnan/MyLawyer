import {StyleSheet, TextInput, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../utils';

export default function Input({label}) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#E9E9E9',
    padding: 12,
  },
  label: {
    fontSize: 16,
    color: colors.gray,
    marginBottom: 6,
    fontFamily: 'PlusJakartaSans-Regular',
  },
});
