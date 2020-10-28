import React, {useState} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Drawer, List} from 'react-native-paper';
import {COLORS} from '../../contants';
const Soal = () => {
  const [state, setState] = useState();

  return (
    <View style={styles.container}>
      <View style={styles.wraperSoal}>
        <Drawer.Section>
          <List.Accordion title="Info Soal Nomor 1" titleStyle={styles.title}>
            <List.Item title="Info Soal Nomor 2" titleStyle={styles.title} />
          </List.Accordion>
        </Drawer.Section>
        <View style={styles.drawerSection}></View>
        <Text>Perhatikan Gambar Berikut</Text>
        <Image
          style={styles.imageSoal}
          source={{
            uri:
              'https://1.bp.blogspot.com/-ovhfp_BqkqE/T1W0wUYRGuI/AAAAAAAAAFU/w3ROER_a1qM/s1600/kubus.jpg',
          }}
        />
        <Text>Berapakah Volume dari Kubus Diatas?</Text>
      </View>
    </View>
  );
};

export default Soal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingVertical: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    marginTop: -50,
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    paddingVertical: 7,
    paddingTop: 50,
  },
  wraperSoal: {
    paddingVertical: 6,
    marginHorizontal: 15,
    paddingHorizontal: 10,
  },
  imageSoal: {
    width: 100,
    height: 100,
  },
  drawerSection: {
    borderBottomWidth: 0.5,
    color: COLORS.gray,
    marginHorizontal: 0,
  },
});
