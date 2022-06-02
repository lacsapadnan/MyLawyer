import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {List} from '../../components';
import {colors, fonts} from '../../utils';
import {Lawyer1, Lawyer2, Lawyer3} from '../../assets';

export default function Pesan({navigation}) {
  const [lawyers] = useState([
    {
      id: 1,
      profile: Lawyer1,
      name: 'Alexander Jannie',
      desc: 'Baik ibu, terima kasih banyak atas wakt...',
    },
    {
      id: 2,
      profile: Lawyer2,
      name: 'Nairobi Putri Hayza',
      desc: 'Oh tentu saja tidak karena jeruk it...',
    },
    {
      id: 3,
      profile: Lawyer3,
      name: 'John McParker Steve',
      desc: 'Oke menurut pak dokter bagaimana unt...',
    },
  ]);
  return (
    <View style={styles.page}>
      <Text style={styles.title}>Pesan</Text>
      {lawyers.map(lawyer => {
        return (
          <List
            key={lawyer.id}
            profile={lawyer.profile}
            name={lawyer.name}
            desc={lawyer.desc}
            onPress={() => navigation.navigate('Chatting')}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 24,
    marginLeft: 16,
  },
});
