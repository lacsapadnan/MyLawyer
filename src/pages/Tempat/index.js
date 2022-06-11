import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React, {useEffect, useState} from 'react';
import {PlaceBg} from '../../assets';
import {colors, fonts, showError} from '../../utils';
import {ListOffice} from '../../components';
import {Fire} from '../../config';

export default function Tempat() {
  const [office, setOffice] = useState([]);
  useEffect(() => {
    Fire.database()
      .ref('office/')
      .once('value')
      .then(res => {
        console.log('data :', res.val());
        if (res.val()) {
          setOffice(res.val());
        }
      })
      .catch(err => {
        showError(err.message);
      });
  }, []);

  return (
    <View style={styles.page}>
      <ImageBackground source={PlaceBg} style={styles.background}>
        <Text style={styles.title}>List Kantor Lawyer</Text>
        <Text style={styles.count}>3 Tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        {office.map(item => {
          return (
            <ListOffice
              key={item.id}
              name={item.name}
              address={item.address}
              image={item.image}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  background: {
    height: 240,
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textAlign: 'center',
  },
  count: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color: colors.white,
    textAlign: 'center',
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderRadius: 20,
    marginTop: -30,
    paddingTop: 14,
  },
});
