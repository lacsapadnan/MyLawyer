import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {ListMessage} from '../../components';
import {colors, fonts} from '../../utils';
import {Lawyer1, Lawyer2, Lawyer3} from '../../assets';

export default function Pesan() {
  const [lawyers] = useState([
    {
      id: 1,
      profile: Lawyer1,
      name: 'Alexander Jannie',
      lastChat: 'Baik ibu, terima kasih banyak atas wakt...',
    },
    {
      id: 2,
      profile: Lawyer2,
      name: 'Nairobi Putri Hayza',
      lastChat: 'Oh tentu saja tidak karena jeruk it...',
    },
    {
      id: 3,
      profile: Lawyer3,
      name: 'John McParker Steve',
      lastChat: 'Oke menurut pak dokter bagaimana unt...',
    },
  ]);
  return (
    <View style={styles.page}>
      <Text style={styles.title}>Pesan</Text>
      {lawyers.map(lawyer => {
        return (
          <ListMessage
            key={lawyer.id}
            profile={lawyer.profile}
            name={lawyer.name}
            lastChat={lawyer.lastChat}
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
    marginLeft: 16,
  },
});
