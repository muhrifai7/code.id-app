import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Divider from '../../assets/icon/Divider.svg';
import Drawing from '../../assets/icon/Drawing-tablet.svg';
import Mockup from '../../assets/icon/Mockup-design.svg';
import Palm from '../../assets/icon/Palm-tree.svg';
import Rule from '../../assets/icon/Ruler.svg';
import Turntable from '../../assets/icon/Turntable.svg';

const Profile = () => {
  const [state, setState] = useState();

  return (
    <View style={styles.container}>
      <View style={styles.content1}>
        <Drawing width={42} height={42} />
        <Text style={styles.titleMateri}>Wawasan </Text>
        <Text style={styles.titleMateri}>Kebangsaan </Text>
      </View>
      <View style={styles.content1}>
        <Divider width={42} height={42} />
        <Text style={styles.titleMateri}>Inteligensi</Text>
        <Text style={styles.titleMateri}>Umum</Text>
      </View>
      <View style={styles.content1}>
        <Mockup width={42} height={42} />
        <Text style={styles.titleMateri}>Karakteristik</Text>
        <Text style={styles.titleMateri}>Pribadi</Text>
      </View>
      <View style={styles.content1}>
        <Rule width={42} height={42} />
        <Text style={styles.titleMateri}>Figura</Text>
      </View>
      <View style={styles.content1}>
        <Palm width={42} height={42} />
        <Text style={styles.titleMateri}>Logikal</Text>
      </View>
      <View style={styles.content1}>
        <Turntable width={42} height={42} />
        <Text style={styles.titleMateri}>Special</Text>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 6,
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 15,
    flexWrap: 'wrap',
    alignItems: 'center',
    // justifyContent: 'space-between',
  },
  content1: {
    marginHorizontal: 15,
    width: 66,
    marginVertical: 6,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  content2: {
    marginRight: 15,
  },
  content: {
    marginHorizontal: 10,
    marginTop: 4,
  },
  profile: {
    fontSize: 14,
  },
  icon: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
  },
  textIcon: {
    fontSize: 10,
  },
  titleMateri: {
    color: 'black',
    fontSize: 11,
  },
});
