import React, {useState} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Divider from '../../assets/icon/Divider.svg';
import Bag from '../../assets/icon/Bag.svg';
import Diamond from '../../assets/icon/Diamond.svg';
import Gap from '../Gap';
import {COLORS} from '../../contants';

const Profile = () => {
  const [state, setState] = useState();

  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.content1,
        }}>
        <Image
          source={{
            uri:
              'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          }}
          style={{
            width: 50,
            height: 50,
            borderRadius: 50 / 2,
            overflow: 'hidden',
          }}
        />
      </View>
      <View style={styles.content2}>
        <Text style={styles.profile}>Hi Sintya Mariska</Text>
        <Text style={styles.freeUser}>Free User</Text>
        <View style={styles.icon}>
          <Bag width={15} height={15} />
          <Text style={styles.textIcon}>Rp 0c</Text>
          <Gap width={5} />
          <Diamond width={15} height={15} />
          <Text style={styles.textIcon}>5</Text>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.premium}>
          <Text style={styles.titlePremium}>Upgarde </Text>
          <Text style={styles.titlePremium}>ke Premium </Text>
        </View>
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
    // alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    justifyContent: 'space-between',
  },
  premium: {
    backgroundColor: COLORS.yellow,
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    borderRadius: 6,
  },
  titlePremium: {
    fontSize: 8,
  },
  content1: {
    marginLeft: 10,
    marginTop: 3,
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
    marginLeft: 5,
  },
  freeUser: {
    color: 'salmon',
  },
});
