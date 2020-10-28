import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import HeaderLatihan from '../../components/HeaderLatihan';
import NomorUrut from '../../components/NomorUrut';
import Soal from '../../components/Soal';
import Gap from '../../components/Gap';
import {COLORS} from '../../contants';
import Jawaban from '../../components/Jawaban';

const Latihan = () => {
  const [state, setState] = useState();

  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar backgroundColor={COLORS.primary} />
        <HeaderLatihan />
        <NomorUrut />
        <Soal />
        <Jawaban />
      </ScrollView>
      <View style={styles.buttonBottom}>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: COLORS.gray,
            borderRadius: 5,
            paddingVertical: 5,
            marginHorizontal: 25,
            marginBottom: 5,
          }}>
          <Icon
            name="lock-closed-outline"
            color="#000"
            size={20}
            onPress={() => {}}
          />
          <Text>Lihat Video Pembahasan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Latihan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  wraperImage: {},
  imageAndTextContainer: {
    backgroundColor: 'blue',
  },
  title: {
    marginHorizontal: 15,
  },
  buttonBottom: {
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 5,
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
  containerSoal: {
    backgroundColor: '#fff',
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
});
