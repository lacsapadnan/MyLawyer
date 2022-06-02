import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {User} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function HomeProfile({onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={User} style={styles.avatar} />
      <View>
        <Text style={styles.name}>Alexandra Daddario</Text>
        <Text style={styles.profession}>Pengusaha</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  profession: {
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
  },
});
