import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Header, List} from '../../components';
import {colors} from '../../utils';
import {Fire} from '../../config';

export default function ListLawyer({navigation, route}) {
  const itemCategory = route.params;
  const [listLawyer, setListLawyer] = useState([]);
  useEffect(() => {
    lawerByCategory(itemCategory.category);
  }, [itemCategory.category]);

  const lawerByCategory = category => {
    Fire.database()
      .ref('lawyers/')
      .orderByChild('category')
      .equalTo(category)
      .once('value')
      .then(res => {
        if (res.val()) {
          const oldData = res.val();
          const data = [];
          Object.keys(oldData).map(key => {
            data.push({
              id: key,
              data: oldData[key],
            });
          });
          setListLawyer(data);
        }
      });
  };
  return (
    <View style={styles.page}>
      <Header
        type="dark"
        title={`Pengacara ${itemCategory.category}`}
        onPress={() => navigation.navigate('Pengacara')}
      />
      {listLawyer.map(lawyer => {
        return (
          <List
            key={lawyer.id}
            type="next"
            name={lawyer.data.fullName}
            desc={lawyer.data.office_address}
            profile={{uri: lawyer.data.photo}}
            onPress={() => navigation.navigate('LawyerProfile', lawyer)}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
