import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SendActive, SendDisable} from '../../../assets';
import {colors} from '../../../utils';

export default function SendButton({disable, onPress}) {
  if (disable) {
    return (
      <View style={styles.container(disable)}>
        <SendDisable />
      </View>
    );
  }
  return (
    <TouchableOpacity style={styles.container(disable)} onPress={onPress}>
      <SendActive />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: disable => ({
    backgroundColor: disable ? colors.input : colors.tetriary,
    width: 45,
    height: 45,
    borderRadius: 10,
    padding: 3,
    paddingLeft: 8,
  }),
});
