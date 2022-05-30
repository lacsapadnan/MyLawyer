import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  IconLawyer,
  IconLawyerActive,
  IconMessage,
  IconMessageActive,
  IconPlace,
  IconPlaceActive,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function TabItem({title, active, onPress, onLongPress}) {
  const Icon = () => {
    if (title === 'Pengacara') {
      return active ? <IconLawyerActive /> : <IconLawyer />;
    }

    if (title === 'Pesan') {
      return active ? <IconMessageActive /> : <IconMessage />;
    }

    if (title === 'Tempat') {
      return active ? <IconPlaceActive /> : <IconPlace />;
    }
    return <IconLawyer />;
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: active => ({
    fontSize: 12,
    color: active ? colors.text.menuActive : colors.text.menuInactivce,
    fontFamily: fonts.primary[600],
    marginTop: 4,
  }),
});
