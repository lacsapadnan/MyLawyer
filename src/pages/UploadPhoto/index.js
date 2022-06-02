import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Button, Gap, Header, Link} from '../../components';
import {AddPhoto, UserPhotoNull} from '../../assets';
import {colors, fonts} from '../../utils';

const UploadPhoto = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Upload Photo" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <View style={styles.profile}>
          <View style={styles.avatarWrapper}>
            <Image source={UserPhotoNull} style={styles.avatar} />
            <AddPhoto style={styles.AddPhoto} />
          </View>
          <Text style={styles.name}>Username</Text>
          <Text style={styles.job}>User Job</Text>
        </View>
        <View>
          <Button
            title="Upload dan Lanjutkan"
            onPress={() => navigation.replace('MainApp')}
          />
          <Gap height={32} />
          <Link
            text="Lewati"
            align="center"
            size={16}
            onPress={() => navigation.replace('MainApp')}
          />
        </View>
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    paddingHorizontal: 40,
    paddingBottom: 64,
    flex: 1,
    justifyContent: 'space-between',
  },
  profile: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarWrapper: {
    width: 130,
    height: 130,
    borderEndWidth: 1,
    borderColor: colors.gray,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
  },
  AddPhoto: {
    position: 'absolute',
    bottom: 8,
    right: 6,
  },
  name: {
    fontSize: 24,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    textAlign: 'center',
  },
  job: {
    fontSize: 18,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    textAlign: 'center',
    marginTop: 2,
  },
});
