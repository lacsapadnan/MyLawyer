import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, Profile} from '../../components';
import ProfieItem from '../../components/molecules/ProfileItem';
import {colors} from '../../utils';

export default function LawyerProfile({navigation, route}) {
  const dataLawyer = route.params;
  return (
    <View style={styles.page}>
      <Header
        title="Profile Pengacara"
        onPress={() => navigation.navigate('Pengacara')}
      />
      <Profile
        name={dataLawyer.data.fullName}
        desc={dataLawyer.data.profession}
        photo={{uri: dataLawyer.data.photo}}
      />
      <Gap height={10} />
      <ProfieItem label="Kantor" value={dataLawyer.data.office_address} />
      <ProfieItem label="No Induk Advokat" value={dataLawyer.data.nia} />
      <View style={styles.action}>
        <Button
          title="Mulai konsultasi"
          onPress={() => navigation.navigate('Chatting')}
        />
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
