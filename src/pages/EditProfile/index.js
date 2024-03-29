import {StyleSheet, View, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Button, Gap, Header, Input, Profile} from '../../components';
import {colors, getData, showError, showSuccess, storeData} from '../../utils';
import {Fire} from '../../config';
import {launchImageLibrary} from 'react-native-image-picker';
import {UserPhotoNull} from '../../assets';

export default function EditProfile({navigation}) {
  const [profile, setProfile] = useState({
    fullName: '',
    profession: '',
    photo: '',
    email: '',
  });

  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState(UserPhotoNull);
  const [saveToDB, setSaveToDB] = useState('');

  useEffect(() => {
    getData('user').then(res => {
      const data = res;
      setPhoto({uri: res.photo});
      setProfile(data);
    });
  }, []);

  const updatePassword = () => {
    Fire.auth().onAuthStateChanged(user => {
      if (user) {
        user.updatePassword(password).catch(err => {
          showError(err.message);
        });
      }
    });
  };

  const updateDataProfile = () => {
    const data = profile;
    data.photo = saveToDB;

    Fire.database()
      .ref(`users/${profile.uid}/`)
      .update(data)
      .then(() => {
        console.log('success: ', data);
        storeData('user', data);
      })
      .catch(err => {
        showError(err.message);
      });
  };

  const updateProfile = () => {
    if (password.length > 0) {
      if (password.length < 6) {
        showError('Password kurang dari 6 karakter');
      } else {
        updatePassword();
        updateDataProfile();
        navigation.replace('MainApp');
        showSuccess('Profile berhasil diperbarui');
      }
    } else {
      updateDataProfile();
      navigation.replace('MainApp');
      showSuccess('Profile berhasil diperbarui');
    }
  };

  const changeText = (key, value) => {
    setProfile({
      ...profile,
      [key]: value,
    });
  };

  const updatePhoto = () => {
    launchImageLibrary(
      {includeBase64: true, quality: 0.5, maxWidth: 200, maxHeight: 200},
      response => {
        if (response.didCancel || response.error) {
          showError('Oops, anda tidak memilih foto apapun');
        } else {
          const source = {uri: response.assets[0].uri};
          setSaveToDB(
            `data:${response.assets[0].type};base64, ${response.assets[0].base64}`,
          );
          setPhoto(source);
        }
      },
    );
  };

  return (
    <View style={styles.page}>
      <Header title="Edit Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Profile isRemove photo={photo} onPress={updatePhoto} />
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
          <Input
            label="Password"
            value={password}
            secureTextEntry
            onChangeText={value => setPassword(value)}
          />
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
