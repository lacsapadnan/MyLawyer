import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';
import {Button} from '../../atoms';

export default function ChatInput() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Tulis pesan anda" />
      <Button type="SendButton" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
  },
  input: {
    backgroundColor: colors.input,
    padding: 14,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
    fontSize: 14,
    fontFamily: fonts.primary[400],
    maxHeight: 45,
  },
});
