import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  LawyerCategory,
  HomeProfile,
  RecommendedLawyer,
  Gap,
} from '../../components';
import {colors, fonts, showError} from '../../utils';
import {Fire} from '../../config';
import {Lawyer1} from '../../assets';

export default function Pengacara({navigation}) {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    Fire.database()
      .ref('categories/')
      .once('value')
      .then(res => {
        if (res.val()) {
          setCategory(res.val());
        }
      })
      .catch(err => {
        showError(err.message);
      });
  }, []);
  return (
    <View style={styles.pages}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Gap height={30} />
        <HomeProfile onPress={() => navigation.navigate('UserProfile')} />
        <Text style={styles.welcome}>Mau konsultasi hukum apa hari ini?</Text>
        <View style={styles.wrapperScroll}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.category}>
              <Gap width={16} />
              {category.map(item => {
                return (
                  <LawyerCategory
                    key={item.id}
                    category={item.category}
                    onPress={() => navigation.navigate('ListLawyer')}
                  />
                );
              })}
              <Gap width={6} />
            </View>
          </ScrollView>
        </View>
        <Text style={styles.recommendLabel}>Rekomendasi Pengacara</Text>
        <RecommendedLawyer
          name="Nama Pengacara"
          category="Hukum Pidana"
          region="Jakarta"
          avatar={Lawyer1}
          onPress={() => navigation.navigate('LawyerProfile')}
        />
        <RecommendedLawyer
          name="Nama Pengacara"
          category="Hukum Pidana"
          region="Jakarta"
          avatar={Lawyer1}
          onPress={() => navigation.navigate('LawyerProfile')}
        />
        <RecommendedLawyer
          name="Nama Pengacara"
          category="Hukum Pidana"
          region="Jakarta"
          avatar={Lawyer1}
          onPress={() => navigation.navigate('LawyerProfile')}
        />
        <RecommendedLawyer
          name="Nama Pengacara"
          category="Hukum Pidana"
          region="Jakarta"
          avatar={Lawyer1}
          onPress={() => navigation.navigate('LawyerProfile')}
        />
        <RecommendedLawyer
          name="Nama Pengacara"
          category="Hukum Pidana"
          region="Jakarta"
          avatar={Lawyer1}
          onPress={() => navigation.navigate('LawyerProfile')}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  pages: {
    paddingHorizontal: 16,
    backgroundColor: colors.white,
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
    maxWidth: 209,
  },
  category: {
    flexDirection: 'row',
  },
  wrapperScroll: {
    marginHorizontal: -16,
  },
  recommendLabel: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 32,
    marginBottom: 16,
  },
});
