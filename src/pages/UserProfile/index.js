import {StyleSheet, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Gap, Header, List, Profile} from '../../components';
import {colors, getData, showError, showSuccess} from '../../utils';
import {UserPhotoNull} from '../../assets';
import {Fire} from '../../config';

export default function UserProfile({navigation}) {
  const [profile, setProfile] = useState({
    fullName: '',
    profession: '',
    photo: UserPhotoNull,
  });

  useEffect(() => {
    getData('user').then(res => {
      const data = res;
      data.photo = {uri: res.photo};
      setProfile(data);
    });
  }, []);

  const signOut = () => {
    Fire.auth()
      .signOut()
      .then(() => {
        navigation.replace('GetStarted');
        showSuccess('Sign out berhasil');
      })
      .catch(err => {
        showError(err.message);
      });
  };

  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Gap height={10} />
      {profile.fullName.length > 0 && (
        <Profile
          name={profile.fullName}
          desc={profile.profession}
          photo={profile.photo}
        />
      )}
      <Gap height={14} />
      <List
        name="Edit Profile"
        desc="Ubah informasi profile anda"
        type="next"
        icon="edit-profile"
        onPress={() => navigation.navigate('EditProfile')}
      />
      <List
        name="Sign Out"
        desc="Keluar dari aplikasi"
        type="next"
        icon="edit-profile"
        onPress={signOut}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
