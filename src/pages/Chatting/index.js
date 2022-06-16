import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ChatBubble, ChatInput, Header} from '../../components';
import {
  colors,
  fonts,
  getChatTime,
  getData,
  setDateChat,
  showError,
} from '../../utils';
import {Fire} from '../../config';

export default function Chatting({navigation, route}) {
  const dataLawyer = route.params;
  const [chatContent, setChatContent] = useState('');
  const [user, setUser] = useState({});
  const [chatData, setChatData] = useState([]);

  const getDataUser = () => {
    getData('user').then(res => {
      setUser(res);
    });
  };

  useEffect(() => {
    getDataUser();
    const chatID = `${user.uid}_${dataLawyer.data.uid}`;
    const urlFirebase = `chatting/${chatID}/allChat/`;
    Fire.database()
      .ref(urlFirebase)
      .on('value', snapshot => {
        if (snapshot.val()) {
          const dataSnapshot = snapshot.val();
          const allChat = [];
          Object.keys(dataSnapshot).map(key => {
            const dataChat = dataSnapshot[key];
            const newDataChat = [];

            Object.keys(dataChat).map(itemChat => {
              newDataChat.push({
                id: itemChat,
                data: dataChat[itemChat],
              });
            });

            allChat.push({
              id: key,
              data: newDataChat,
            });
          });
          setChatData(allChat);
        }
      });
  }, [dataLawyer.data.uid, user.uid]);

  const chatSend = () => {
    const today = new Date();
    const data = {
      sendBy: user.uid,
      chatDate: today.getTime(),
      chatTime: getChatTime(today),
      chatContent: chatContent,
    };

    const chatID = `${user.uid}_${dataLawyer.data.uid}`;
    const urlFirebase = `chatting/${chatID}/allChat/${setDateChat(today)}`;
    const urlMessagesUser = `messages/${user.uid}/${chatID}`;
    const urlMessagesLawyer = `messages/${dataLawyer.data.uid}/${chatID}`;
    const dataHistoryChatUser = {
      lastChat: chatContent,
      lastChatDate: today.getTime(),
      uidPartner: dataLawyer.data.uid,
    };
    const dataHistoryChatLawyer = {
      lastChat: chatContent,
      lastChatDate: today.getTime(),
      uidPartner: user.uid,
    };

    Fire.database()
      .ref(urlFirebase)
      .push(data)
      .then(() => {
        setChatContent('');
        Fire.database().ref(urlMessagesUser).set(dataHistoryChatUser);
        Fire.database().ref(urlMessagesLawyer).set(dataHistoryChatLawyer);
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
          {chatData.map(chat => {
            return (
              <View key={chat.id}>
                <Text style={styles.chatDate}>{chat.id}</Text>
                {chat.data.map(itemChat => {
                  const isMe = itemChat.data.sendBy === user.uid;
                  return (
                    <ChatBubble
                      key={itemChat.id}
                      isMe={isMe}
                      text={itemChat.data.chatContent}
                      date={itemChat.data.chatTime}
                      photo={isMe ? null : {uri: dataLawyer.data.photo}}
                    />
                  );
                })}
              </View>
            );
          })}
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
