import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import {PlaceBg} from '../../assets';
import {colors, fonts} from '../../utils';
import {ListOffice} from '../../components';

export default function Tempat() {
  return (
    <View style={styles.page}>
      <ImageBackground source={PlaceBg} style={styles.background}>
        <Text style={styles.title}>List Kantor Lawyer</Text>
        <Text style={styles.count}>3 Tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ListOffice />
        <ListOffice />
        <ListOffice />
        <ListOffice />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  background: {
    height: 240,
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textAlign: 'center',
  },
  count: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color: colors.white,
    textAlign: 'center',
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderRadius: 20,
    marginTop: -30,
    paddingTop: 14,
  },
});
