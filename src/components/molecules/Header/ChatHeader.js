import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';
import {Button} from '../../atoms';

export default function ChatHeader({onPress, title, category, photo}) {
  return (
    <View style={styles.container}>
      <Button type="IconButton" icon="back-light" onPress={onPress} />
      <View style={styles.content}>
        <Text style={styles.name}>{title}</Text>
        <Text style={styles.category}>{category}</Text>
      </View>
      <Image style={styles.avatar} source={photo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    paddingVertical: 30,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
  content: {
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    marginBottom: 4,
  },
  category: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
  },
});
