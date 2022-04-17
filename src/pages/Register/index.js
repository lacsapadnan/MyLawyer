import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, Input} from '../../components';

export default function Register() {
  return (
    <View style={styles.pages}>
      <Header title="Daftar Akun" />
      <View style={styles.content}>
        <Input label="Nama Lengkap" />
        <Gap height={24} />
        <Input label="Pekerjaan" />
        <Gap height={24} />
        <Input label="Email" />
        <Gap height={24} />
        <Input label="Password" />
        <Gap height={80} />
        <Button title="Selanjutnya" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pages: {
    backgroundColor: 'white',
    flex: 1,
  },
  content: {
    padding: 40,
    paddingTop: 0,
  },
});
