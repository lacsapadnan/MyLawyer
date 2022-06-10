import {StyleSheet, View, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Button, Gap, Header, Input, Profile} from '../../components';
import {colors, getData} from '../../utils';
import {Fire} from '../../config';
import {showMessage} from 'react-native-flash-message';

export default function EditProfile({navigation}) {
  const [profile, setProfile] = useState({
    fullName: '',
    profession: '',
    photo: '',
    email: '',
  });

  const [password, setPassword] = useState('');

  useEffect(() => {
    getData('user').then(res => {
      const data = res;
      data.photo = {uri: res.photo};
      setProfile(data);
    });
  }, []);

  const updateProfile = () => {
    console.log('profile :', profile);
    const data = profile;
    data.photo = profile.photo.uri;
    Fire.database()
      .ref(`users/${profile.uid}/`)
      .update(profile)
      .then(() => {
        console.log('success: ');
      })
      .catch(err => {
        showMessage({
          message: err.message,
          type: 'danger',
          backgroundColor: colors.error,
          color: colors.white,
        });
      });
  };

  const changeText = (key, value) => {
    setProfile({
      ...profile,
      [key]: value,
    });
  };

  return (
    <View style={styles.page}>
      <Header title="Edit Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Profile isRemove photo={profile.photo} />
          <Gap height={24} />
          <Input
            label="Nama lengkap"
            value={profile.fullName}
            onChangeText={value => changeText('fullName', value)}
          />
          <Gap height={24} />
          <Input
            label="Profesi"
            value={profile.profession}
            onChangeText={value => changeText('profession', value)}
          />
          <Gap height={24} />
          <Input label="Email" value={profile.email} isDisable />
          <Gap height={24} />
          <Input label="Password" value={password} />
          <Gap height={40} />
          <Button title="Simpan Profile" onPress={updateProfile} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    padding: 40,
    paddingTop: 0,
  },
});
