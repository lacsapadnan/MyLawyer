import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {DummyPlace} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function ListOffice() {
  return (
    <View style={styles.container}>
      <Image source={DummyPlace} style={styles.image} />
      <View>
        <Text style={styles.office}>Nama Kantor</Text>
        <Text style={styles.address}>Alamat</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 60,
    borderRadius: 11,
    marginRight: 16,
  },
  office: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  address: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
    marginTop: 6,
  },
});
