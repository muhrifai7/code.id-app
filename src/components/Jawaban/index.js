import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {COLORS} from '../../contants';
const Jawaban = () => {
  const [state, setState] = useState();

  return (
    <View style={styles.wraperJawaban}>
      <Text style={{color: COLORS.green}}>Jawaban kamu Benar</Text>
      <TouchableOpacity
        style={{
          ...styles.wraperJawab,
          backgroundColor: COLORS.green,
          opacity: 0.3,
        }}>
        <View style={{...styles.alphabet, backgroundColor: COLORS.green}}>
          <Text>A</Text>
        </View>
        <View>
          <Text style={styles.huruf}>638 M</Text>
        </View>
        <View style={styles.pangkat}>
          <Text style={{fontSize: 10}}>2</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.wraperJawab}>
        <View style={{...styles.alphabet, backgroundColor: COLORS.gray}}>
          <Text>B</Text>
        </View>
        <View>
          <Text style={styles.huruf}>638 M</Text>
        </View>
        <View style={styles.pangkat}>
          <Text style={{fontSize: 10}}>2</Text>
        </View>
      </View>
      <View style={styles.wraperJawab}>
        <View style={{...styles.alphabet, backgroundColor: COLORS.gray}}>
          <Text>C</Text>
        </View>
        <View>
          <Text style={styles.huruf}>638 M</Text>
        </View>
        <View style={styles.pangkat}>
          <Text style={{fontSize: 10}}>2</Text>
        </View>
      </View>
      <View style={styles.wraperJawab}>
        <View style={{...styles.alphabet, backgroundColor: COLORS.gray}}>
          <Text>D</Text>
        </View>
        <View>
          <Text style={styles.huruf}>638 M</Text>
        </View>
        <View style={styles.pangkat}>
          <Text style={{fontSize: 10}}>2</Text>
        </View>
      </View>
      <View style={styles.wraperJawab}>
        <View style={{...styles.alphabet, backgroundColor: COLORS.gray}}>
          <Text>E</Text>
        </View>
        <View>
          <Text style={styles.huruf}>638 M</Text>
        </View>
        <View style={styles.pangkat}>
          <Text style={{fontSize: 10}}>2</Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: COLORS.green,
          borderRadius: 5,
          paddingVertical: 5,
        }}>
        <Icon
          name="lock-closed-outline"
          color="#000"
          size={20}
          onPress={() => {}}
        />
        <Text>Lihat Pembahasan</Text>
      </View>
      <View style={styles.backButoon}>
        <Icon
          name="arrow-back-circle"
          color={COLORS.gray}
          size={40}
          onPress={() => {}}
        />
        <Icon
          name="arrow-forward-circle"
          color={COLORS.green}
          size={40}
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

export default Jawaban;

const styles = StyleSheet.create({
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
  backButoon: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 15,
    justifyContent: 'center',
    padding: 10,
  },
});
