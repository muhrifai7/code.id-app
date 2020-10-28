import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {COLORS} from '../../contants';

const soal = [
  {id: 1, jawaban: true},
  {id: 2, jawaban: true},
  {id: 3, jawaban: true},
  {id: 4, jawaban: false},
  {id: 5, jawaban: false},
  {id: 6, jawaban: false},
  {id: 7, jawaban: false},
  {id: 8, jawaban: false},
];

const NomorUrut = () => {
  const [state, setState] = useState();

  return (
    <View style={styles.container}>
      <View style={styles.warperTitleSoal}>
        <Text>Nomor Soal</Text>
        <Text style={{color: COLORS.green, fontSize: 10}}>Lihat Semua </Text>
      </View>
      <ScrollView horizontal={true}>
        <View style={styles.urutan}>
          {soal.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={{
                  ...styles.nomor,
                  backgroundColor: item.jawaban ? COLORS.green : COLORS.gray,
                }}>
                <Text style={{color: '#fff'}}>{item.id}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default NomorUrut;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: -29,
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
    elevation: 5,
  },
  urutan: {
    marginTop: 4,
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  nomor: {
    borderRadius: 50,
    width: 30,
    height: 30,
    padding: 3,
    alignItems: 'center',
    marginHorizontal: 5,
  },
});
