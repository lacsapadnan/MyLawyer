import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ChatBubble, ChatInput, Header} from '../../components';
import {colors, fonts} from '../../utils';

export default function Chatting({navigation}) {
  return (
    <View style={styles.page}>
      <Header
        type="chat"
        title="Hotman Paris Hutapea"
        onPress={() => navigation.navigate('ListLawyer')}
      />
      <View style={styles.content}>
        <Text style={styles.chatDate}>Rabu, 1 Juni 2022</Text>
        <ChatBubble isMe />
        <ChatBubble />
        <ChatBubble isMe />
      </View>
      <ChatInput />
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
