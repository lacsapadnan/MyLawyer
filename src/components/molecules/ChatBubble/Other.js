import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';
import {Lawyer1} from '../../../assets';

export default function Other() {
  return (
    <View style={styles.container}>
      <Image source={Lawyer1} style={styles.avatar} />
      <View>
        <View style={styles.chatBubble}>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            hendrerit volutpat bibendum. Nulla tellus dolor, hendrerit
            vestibulum libero quis, facilisis ultricies sapien.{' '}
          </Text>
        </View>
        <Text style={styles.date}>04.15 PM</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'flex-end',
    paddingLeft: 16,
    flexDirection: 'row',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 40 / 2,
    marginRight: 12,
  },
  chatBubble: {
    maxWidth: '80%',
    padding: 12,
    paddingLeft: 18,
    backgroundColor: colors.primary,
    borderRadius: 10,
    borderBottomLeftRadius: 0,
  },
  text: {
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: colors.white,
  },
  date: {
    fontSize: 11,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    marginTop: 8,
  },
});
