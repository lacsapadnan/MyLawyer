import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {User} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.borderProfile}>
        <Image source={User} style={styles.avatar} />
      </View>
      <Text style={styles.name}>Alexandra Daddario</Text>
      <Text style={styles.profession}>Wirausaha</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderProfile: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  name: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 16,
  },
  profession: {
    fontSize: 16,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    marginTop: 2,
  },
});
