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

export default function Pengacara({navigation}) {
  const [category, setCategory] = useState([]);
  const [lawyer, setLawyer] = useState([]);
  const getCategory = () => {
    Fire.database()
      .ref('categories/')
      .once('value')
      .then(res => {
        if (res.val()) {
          const data = res.val();
          const filterData = data.filter(el => el !== null);
          setCategory(filterData);
        }
      })
      .catch(err => {
        showError(err.message);
      });
  };
  const getLawyer = () => {
    Fire.database()
      .ref('lawyers/')
      .limitToLast(3)
      .once('value')
      .then(res => {
        if (res.val()) {
          const oldData = res.val();
          const data = [];
          Object.keys(oldData).map(key => {
            data.push({
              id: key,
              data: oldData[key],
            });
          });
          setLawyer(data);
        }
      })
      .catch(err => {
        showError(err.message);
      });
  };

  useEffect(() => {
    getCategory();
    getLawyer();
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
                    onPress={() => navigation.navigate('ListLawyer', item)}
                  />
                );
              })}
              <Gap width={6} />
            </View>
          </ScrollView>
        </View>
        <Text style={styles.recommendLabel}>Pengacara Terbaru</Text>
        {lawyer.map(dataLawyer => {
          return (
            <RecommendedLawyer
              key={dataLawyer.id}
              name={dataLawyer.data.fullName}
              category={dataLawyer.data.category}
              region={dataLawyer.data.office_address}
              avatar={{uri: dataLawyer.data.photo}}
              onPress={() => navigation.navigate('LawyerProfile', dataLawyer)}
            />
          );
        })}
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
