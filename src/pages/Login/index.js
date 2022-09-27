import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {Logo} from '../../assets';
import {Button, Gap, Input, Link} from '../../components';
import {colors, fonts, showError, storeData, useForm} from '../../utils';
import {Fire} from '../../config';
import {useDispatch} from 'react-redux';

export default function Login({navigation}) {
  const [form, setForm] = useForm({email: '', password: ''});
  const dispatch = useDispatch();

  const login = () => {
    dispatch({type: 'SET_LOADING', value: true});

    Fire.auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then(res => {
        dispatch({type: 'SET_LOADING', value: false});
        Fire.database()
          .ref(`users/${res.user.uid}/`)
          .once('value')
          .then(resDb => {
            if (resDb.val()) {
              storeData('user', resDb.val());
              navigation.replace('MainApp');
            }
          });
      })
      .catch(err => {
        dispatch({type: 'SET_LOADING', value: false});
        showError(err.message);
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
