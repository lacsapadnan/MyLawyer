import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';
import {Button} from '../../atoms';

export default function ChatInput({value, onChangeText, onPress}) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Tulis pesan anda"
        value={value}
        onChangeText={onChangeText}
      />
      <Button disable={value.length < 1} type="SendButton" onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
    backgroundColor: colors.white,
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
