import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {ILCategory} from '../../../assets';
import {colors} from '../../../utils/colors';
import {fonts} from '../../../utils';

export default function LawyerCategory() {
  return (
    <View style={styles.container}>
      <Image source={ILCategory} style={styles.image} />
      <Text style={styles.label}>Konsultasi</Text>
      <Text style={styles.category}>Hukum Perpajakan</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: colors.cardCategory,
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginRight: 10,
    width: 100,
    height: 'auto',
  },
  image: {
    marginBottom: 28,
    width: 56,
    height: 56,
  },
  label: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.primary,
  },
  category: {
    fontSize: 12,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
});
