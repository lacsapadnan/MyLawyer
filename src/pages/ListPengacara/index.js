import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Header, ListLawter} from '../../components';
import {Lawyer1} from '../../assets';
import {colors} from '../../utils';

export default function ListLawyer() {
  return (
    <View style={styles.page}>
      <Header type="dark" title="Pilih Pengacara" />
      <ListLawter
        type="next"
        name="Nama lawyer"
        region="Jakarta"
        profile={Lawyer1}
      />
      <ListLawter
        type="next"
        name="Nama lawyer"
        region="Jakarta"
        profile={Lawyer1}
      />
      <ListLawter
        type="next"
        name="Nama lawyer"
        region="Jakarta"
        profile={Lawyer1}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
