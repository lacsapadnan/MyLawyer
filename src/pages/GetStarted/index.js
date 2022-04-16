import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import {Logo} from '../../assets/icon';
import {ILGetStarted} from '../../assets';
import {Button} from '../../components';

const GetStarted = () => {
  return (
    <ImageBackground source={ILGetStarted} style={styles.pages}>
      <View>
        <Logo />
        <Text style={styles.title}>
          Konsultasi dengan pengacara atau LBH jadi lebih mudah dan fleksibel
        </Text>
      </View>
      <View>
        <Button title="Get Started" />
        <View style={{height: 16}} />
        <Button type="secondary" title="Sign In" />
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  pages: {
    padding: 40,
    justifyContent: 'space-between',
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    marginTop: 80,
    color: 'white',
  },
});
