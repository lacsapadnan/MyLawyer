import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Input} from '../../components';

export default function Register({navigation}) {
  return (
    <View style={styles.pages}>
      <Header title="Daftar Akun" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <Input label="Nama Lengkap" />
        <Gap height={24} />
        <Input label="Pekerjaan" />
        <Gap height={24} />
        <Input label="Email" />
        <Gap height={24} />
        <Input label="Password" />
        <Gap height={80} />
        <Button
          title="Selanjutnya"
          onPress={() => navigation.navigate('UploadPhoto')}
        />
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
