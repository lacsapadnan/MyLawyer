import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, Profile} from '../../components';
import ProfieItem from '../../components/molecules/ProfileItem';
import {colors} from '../../utils';

export default function LawyerProfile({navigation}) {
  return (
    <View style={styles.page}>
      <Header
        title="Profile Pengacara"
        onPress={() => navigation.navigate('Pengacara')}
      />
      <Profile name="Nama Pengacara" desc="Hukum Pidana" />
      <Gap height={10} />
      <ProfieItem label="Alumnus" value="UI 200" />
      <ProfieItem label="Kantor" value="JL. Jend. Sudirman" />
      <ProfieItem label="No Induk Advokat" value="1289371298371" />
      <View style={styles.action}>
        <Button title="Mulai konsultasi" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  action: {
    paddingHorizontal: 40,
    paddingTop: 23,
  },
});
