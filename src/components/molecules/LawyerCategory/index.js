import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {CategoryIcon, TaxIcon, TPPUIcon} from '../../../assets';
import {colors} from '../../../utils/colors';
import {fonts} from '../../../utils';

export default function LawyerCategory({category, onPress}) {
  const Icon = () => {
    if (category === 'Hukum Perpajakan') {
      return <TaxIcon style={styles.image} />;
    }
    if (category === 'Hukum TPPU') {
      return <TPPUIcon style={styles.image} />;
    }
    if (category === 'Hukum Kepailitan') {
      return <TPPUIcon style={styles.image} />;
    }
    return <CategoryIcon style={styles.image} />;
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon />
      <Text style={styles.label}>Konsultasi</Text>
      <Text style={styles.category}>{category}</Text>
    </TouchableOpacity>
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
