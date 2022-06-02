import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Logo} from '../../assets';
import {Button, Gap, Input, Link} from '../../components';
import {colors, fonts} from '../../utils';

export default function Login({navigation}) {
  return (
    <View style={styles.page}>
      <Logo />
      <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
      <Input label="Email Adress" />
      <Gap height={24} />
      <Input label="Password" />
      <Gap height={10} />
      <Link text="Forgot password?" size={12} />
      <Gap height={40} />
      <Button title="Sign in" onPress={() => navigation.replace('MainApp')} />
      <Gap height={32} />
      <Link
        text="Create New Account"
        size={16}
        align="center"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: 'white',
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginVertical: 40,
    maxWidth: 160,
  },
});
