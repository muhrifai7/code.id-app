import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {OnBoarding} from '../../assets/images/onboarding-1.png';
import {SIZES, COLORS} from '../../contants';

const HeaderLatihan = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wraperImage}>
        <View style={styles.title}>
          <Text style={styles.latihanTitle}>Latihan Soal 3</Text>
          <Text style={styles.subTitle}>Fisika Modal Magnet</Text>
        </View>
        <View>
          <Image
            source={{
              uri:
                'https://i.pinimg.com/736x/52/f7/6b/52f76b6c297da5f88e740e1da4f85447.jpg',
            }}
            resizeMode="cover"
            style={{
              width: 100,
              height: 100,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default HeaderLatihan;
const styles = StyleSheet.create({
  container: {},
  wraperImage: {
    backgroundColor: COLORS.primary,
  },
  wraperImage: {
    backgroundColor: COLORS.primary,
    paddingTop: 20,
    display: 'flex',
    flexDirection: 'row',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  title: {
    marginHorizontal: 15,
  },
  wraperSoal: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
    marginHorizontal: 15,
    paddingHorizontal: 10,
  },
  subTitle: {
    color: 'green',
    fontSize: 14,
  },
  latihanTitle: {
    fontSize: 16,
  },
  imageSoal: {
    width: 100,
    height: 100,
  },
  nomorUrut: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderRadius: 6,
    paddingHorizontal: 10,
    alignContent: 'center',
    paddingVertical: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    paddingVertical: 7,
    elevation: 8,
  },
  warperTitleSoal: {
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'center',
    flexDirection: 'row',
  },
  containerSoal: {
    backgroundColor: '#fff',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  wraperJawaban: {
    marginHorizontal: 15,
    paddingHorizontal: 10,
    paddingVertical: 14,
  },
  wraperJawab: {
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
    borderRadius: 4,
    marginVertical: 7,
  },
  alphabet: {
    backgroundColor: 'salmon',
    borderRadius: 50,
    width: 26,
    height: 26,
    padding: 3,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  jawaban: {
    width: 26,
    height: 26,
  },
  pangkat: {
    marginBottom: 6,
    marginLeft: 4,
  },
  nomor: {
    borderRadius: 50,
    width: 30,
    height: 30,
    padding: 3,
    alignItems: 'center',
    marginHorizontal: 5,
    overflow: 'hidden',
  },
  urutan: {
    marginTop: 4,
    display: 'flex',
    flexDirection: 'row',
  },
});
