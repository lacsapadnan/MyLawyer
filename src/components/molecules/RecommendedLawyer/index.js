import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Lawyer1} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function RecommendedLawyer() {
  return (
    <View style={styles.container}>
      <Image source={Lawyer1} style={styles.avatar} />
      <View style={styles.profile}>
        <Text style={styles.name}>Nama</Text>
        <Text style={styles.category}>Kategori</Text>
      </View>
      <View style={styles.region}>
        <Text>Daerah</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginRight: 12,
  },
  profile: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  category: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    marginTop: 2,
  },
  region: {
    flexDirection: 'row',
  },
});
