import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {Logo} from '../../assets';
import {Button, Gap, Input, Link, Loading} from '../../components';
import {colors, fonts, storeData, useForm} from '../../utils';
import {Fire} from '../../config';
import {showMessage} from 'react-native-flash-message';

export default function Login({navigation}) {
  const [form, setForm] = useForm({email: '', password: ''});
  const [loading, setLoading] = useState(false);

  const login = () => {
    console.log('form: ', form);
    setLoading(true);
    Fire.auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then(res => {
        console.log('sucess: ', res);
        setLoading(false);
        Fire.database()
          .ref(`users/${res.user.uid}/`)
          .once('value')
          .then(resDb => {
            console.log('data user: ', resDb.val());
            if (resDb.val()) {
              storeData('user', resDb.val());
              navigation.navigate('MainApp');
            }
          });
      })
      .catch(err => {
        console.log('error: ', err);
        setLoading(true);
        showMessage({
          message: err.message,
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white,
        });
      });
  };
  return (
    <>
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={40} />
          <Logo />
          <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
          <Input
            label="Email Adress"
            value={form.email}
            onChangeText={value => setForm('email', value)}
          />
          <Gap height={24} />
          <Input
            label="Password"
            value={form.password}
            onChangeText={value => setForm('password', value)}
            secureTextEntry={true}
          />
          <Gap height={10} />
          <Link text="Forgot password?" size={12} />
          <Gap height={40} />
          <Button title="Sign in" onPress={login} />
          <Gap height={32} />
          <Link
            text="Create New Account"
            size={16}
            align="center"
            onPress={() => navigation.navigate('Register')}
          />
        </ScrollView>
      </View>
      {loading && <Loading />}
    </>
  );
}

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 40,
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
