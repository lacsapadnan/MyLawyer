import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import {Logo} from '../../assets/icon';
import {ILGetStarted} from '../../assets';
import {Button, Gap} from '../../components';

const GetStarted = ({navigation}) => {
  return (
    <ImageBackground source={ILGetStarted} style={styles.pages}>
      <View>
        <Logo />
        <Text style={styles.title}>
          Konsultasi dengan pengacara atau LBH jadi lebih mudah dan fleksibel
        </Text>
      </View>
      <View>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('Register')}
        />
        <Gap height={16} />
        <Button
          type="secondary"
          title="Sign In"
          onPress={() => navigation.navigate('Login')}
        />
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
    fontFamily: 'PlusJakartaSans-SemiBold',
    fontSize: 28,
    fontWeight: '600',
    marginTop: 80,
    color: 'white',
  },
});
