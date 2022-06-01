import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {
  LawyerCategory,
  HomeProfile,
  RecommendedLawyer,
  Gap,
} from '../../components';
import {colors, fonts} from '../../utils';

export default function Pengacara() {
  return (
    <View style={styles.pages}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Gap height={30} />
        <HomeProfile />
        <Text style={styles.welcome}>Mau konsultasi hukum apa hari ini?</Text>
        <View style={styles.wrapperScroll}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.category}>
              <Gap width={16} />
              <LawyerCategory />
              <LawyerCategory />
              <LawyerCategory />
              <LawyerCategory />
              <Gap width={6} />
            </View>
          </ScrollView>
        </View>
        <Text style={styles.recommendLabel}>Rekomendasi Pengacara</Text>
        <RecommendedLawyer />
        <RecommendedLawyer />
        <RecommendedLawyer />
        <RecommendedLawyer />
        <RecommendedLawyer />
        <RecommendedLawyer />
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
