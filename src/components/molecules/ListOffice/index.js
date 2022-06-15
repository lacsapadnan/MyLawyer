import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';

export default function ListOffice({image, name, address, onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{uri: image}} style={styles.image} />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.address}>{address}</Text>
      </View>
    </TouchableOpacity>
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
    width: 216,
  },
  address: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
    marginTop: 6,
    width: 216,
  },
});
