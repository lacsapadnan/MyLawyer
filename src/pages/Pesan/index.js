import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {List} from '../../components';
import {colors, fonts, getData} from '../../utils';
import {Fire} from '../../config';

export default function Pesan({navigation}) {
  const [user, setUser] = useState({});
  const [history, setHistory] = useState([]);

  const getDataUser = () => {
    getData('user').then(res => {
      setUser(res);
    });
  };

  useEffect(() => {
    getDataUser();
    const rootDB = Fire.database().ref();
    const urlHistory = `messages/${user.uid}/`;
    const messagesDB = rootDB.child(urlHistory);

    messagesDB.on('value', async snapshot => {
      if (snapshot.val()) {
        const oldData = snapshot.val();
        const data = [];

        const promises = await Object.keys(oldData).map(async key => {
          const urlLawyerUid = `lawyers/${oldData[key].uidPartner}`;
          const detailLawyer = await rootDB.child(urlLawyerUid).once('value');
          data.push({
            id: key,
            detailLawyer: detailLawyer.val(),
            ...oldData[key],
          });
        });

        await Promise.all(promises);

        console.log('data history: ', data);
        setHistory(data);
      }
    });
  }, [user.uid]);

  return (
    <View style={styles.page}>
      <Text style={styles.title}>Pesan</Text>
      {history.map(chat => {
        const dataLawyer = {
          id: chat.detailLawyer.uid,
          data: chat.detailLawyer,
        };
        return (
          <List
            key={chat.id}
            profile={{uri: chat.detailLawyer.photo}}
            name={chat.detailLawyer.fullName}
            desc={chat.lastChat}
            onPress={() => navigation.navigate('Chatting', dataLawyer)}
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
