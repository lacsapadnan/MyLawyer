import {StyleSheet, TextInput, Text, View} from 'react-native';
import React, {useState} from 'react';
import {colors, fonts} from '../../../utils';

export default function Input({
  label,
  value,
  onChangeText,
  secureTextEntry,
  isDisable,
}) {
  const [border, setBorder] = useState(colors.border);
  const onFocusForm = () => {
    setBorder(colors.tetriary);
  };
  const onBlurForm = () => {
    setBorder(colors.border);
  };
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        style={styles.input(border)}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        editable={!isDisable}
        selectTextOnFocus={!isDisable}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: border => ({
    borderWidth: 1,
    borderRadius: 10,
    borderColor: border,
    padding: 12,
    color: colors.text,
  }),
  label: {
    fontSize: 16,
    color: colors.gray,
    marginBottom: 6,
    fontFamily: fonts.primary[400],
  },
});
