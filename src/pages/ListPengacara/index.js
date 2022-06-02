import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Header, List} from '../../components';
import {Lawyer1} from '../../assets';
import {colors} from '../../utils';

export default function ListLawyer({navigation}) {
  return (
    <View style={styles.page}>
      <Header
        type="dark"
        title="Pilih Pengacara"
        onPress={() => navigation.navigate('Pengacara')}
      />
      <List
        type="next"
        name="Nama lawyer"
        desc="Jakarta"
        profile={Lawyer1}
        onPress={() => navigation.navigate('Chatting')}
      />
      <List type="next" name="Nama lawyer" desc="Jakarta" profile={Lawyer1} />
      <List type="next" name="Nama lawyer" desc="Jakarta" profile={Lawyer1} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
