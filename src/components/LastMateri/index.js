import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Drawing from '../../assets/icon/Drawing-tablet.svg';

import {COLORS} from '../../contants';

const Baner = () => {
  return (
    <View style={styles.container}>
      <View style={styles.kotaContainer}>
        <ScrollView horizontal={true}>
          <TouchableOpacity onPress={() => {}} style={styles.banner}>
            <View style={styles.titleBanner}>
              <Text>Medan Magnet</Text>
              <Text style={styles.jam}>Video - 13 jam lalu</Text>
            </View>
            <View style={styles.titleBanner}>
              <Drawing width={37} height={37} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{...styles.banner, backgroundColor: COLORS.yellow}}>
            <View style={styles.titleBanner}>
              <Text>Simple past Tense</Text>
              <Text style={styles.jam}>Video - 13 jam lalu</Text>
            </View>
            <View style={styles.titleBanner}>
              <Drawing width={37} height={37} />
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default Baner;

const styles = StyleSheet.create({
  container: {
    // padding: 20,
  },
  image: {
    width: 150,
    height: 100,
    borderRadius: 5,
  },
  banner: {
    marginRight: 10,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: '#fff',
    borderRadius: 5,
    alignItems: 'center',
  },

  titleBanner: {
    marginHorizontal: 5,
    marginVertical: 3,
    paddingVertical: 3,
  },
  kotaContainer: {
    flexDirection: 'row',
  },
  jam: {
    fontSize: 11,
    color: COLORS.gray,
  },
});
