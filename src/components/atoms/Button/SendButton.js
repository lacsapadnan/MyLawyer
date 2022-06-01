import {StyleSheet, View} from 'react-native';
import React from 'react';
import {SendActive, SendDisable} from '../../../assets';
import {colors} from '../../../utils';

export default function SendButton({isActive}) {
  return (
    <View style={styles.container(isActive)}>
      {isActive && <SendActive />}
      {!isActive && <SendDisable />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: isActive => ({
    backgroundColor: isActive ? colors.tetriary : colors.input,
    width: 45,
    height: 45,
    borderRadius: 10,
    padding: 3,
    paddingLeft: 8,
  }),
});
