import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ListMessage} from '../../components';
import {colors, fonts} from '../../utils';

export default function Pesan() {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>Pesan</Text>
      <ListMessage />
      <ListMessage />
      <ListMessage />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginLeft: 16,
  },
});
