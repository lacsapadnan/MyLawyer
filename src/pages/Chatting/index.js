import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ChatBubble, ChatInput, Header} from '../../components';
import {colors, fonts} from '../../utils';

export default function Chatting({navigation, route}) {
  const dataLawyer = route.params;
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
        value="Hallo"
        onChangeText={() => alert('input tap')}
        onPress={() => alert('button pressed')}
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
