import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ChatBubble, ChatInput, Header} from '../../components';
import {colors, fonts, getData, showError} from '../../utils';
import {Fire} from '../../config';

export default function Chatting({navigation, route}) {
  const dataLawyer = route.params;
  const [chatContent, setChatContent] = useState('');
  const [user, setUser] = useState({});

  useEffect(() => {
    getData('user').then(res => {
      console.log('user: ', res);
      setUser(res);
    });
  }, []);

  const chatSend = () => {
    const today = new Date();
    const hour = today.getHours();
    const minute = today.getMinutes();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const data = {
      sendBy: user.uid,
      chatDate: new Date().getTime(),
      chatTime: `${hour}:${minute} ${hour > 12 ? 'PM' : 'AM'}`,
      chatContent: chatContent,
    };

    Fire.database()
      .ref(
        `chatting/${user.uid}_${dataLawyer.data.uid}/allChat/${year}-${month}-${date}`,
      )
      .push(data)
      .then(() => {
        setChatContent('');
      })
      .catch(err => {
        showError(err);
      });
  };
  return (
    <View style={styles.page}>
      <Header
        type="chat"
        title={dataLawyer.data.fullName}
        category={dataLawyer.data.profession}
        photo={{uri: dataLawyer.data.photo}}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.chatDate}>Rabu, 1 Juni 2022</Text>
          <ChatBubble isMe />
          <ChatBubble />
          <ChatBubble isMe />
        </ScrollView>
      </View>
      <ChatInput
        value={chatContent}
        onChangeText={value => setChatContent(value)}
        onPress={chatSend}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    flex: 1,
  },
  chatDate: {
    fontSize: 11,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    marginVertical: 20,
    textAlign: 'center',
  },
});
