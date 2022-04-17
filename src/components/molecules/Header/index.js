import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BackIcon} from '../../../assets';
import {Gap} from '../../atoms';

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <BackIcon />
      <Text style={styles.text}>{title}</Text>
      <Gap width={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingVertical: 30,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    flex: 1,
    fontSize: 20,
    fontFamily: 'PlusJakartaSans-SemiBold',
    color: '#112340',
  },
});
