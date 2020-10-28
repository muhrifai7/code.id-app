import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import {COLORS} from '../../contants';

const Dashboard = ({navigation}) => {
  const [state, setState] = useState();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={{
          justifyContent: 'center',
          backgroundColor: COLORS.gray,
          borderRadius: 5,
          alignContent: 'center',
          paddingVertical: 5,
          marginTop: 30,
          marginHorizontal: 25,
          marginBottom: 5,
        }}>
        <Text>Lihat Materi</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Latihan')}
        style={{
          justifyContent: 'center',
          backgroundColor: COLORS.gray,
          borderRadius: 5,
          alignContent: 'center',
          paddingVertical: 5,
          marginHorizontal: 25,
          marginTop: 30,
          marginBottom: 5,
        }}>
        <Text>Lihat Soal</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
});
