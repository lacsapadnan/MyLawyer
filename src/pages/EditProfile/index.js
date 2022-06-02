import {StyleSheet, View, ScrollView} from 'react-native';
import React from 'react';
import {Button, Gap, Header, Input, Profile} from '../../components';
import {colors} from '../../utils';

export default function EditProfile({navigation}) {
  return (
    <View style={styles.page}>
      <Header title="Edit Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Profile isRemove />
          <Gap height={24} />
          <Input label="Nama lengkap" />
          <Gap height={24} />
          <Input label="Profesi" />
          <Gap height={24} />
          <Input label="Email" />
          <Gap height={24} />
          <Input label="Password" />
          <Gap height={40} />
          <Button
            title="Simpan Profile"
            onPress={() => navigation.goBack('UserProfile')}
          />
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
