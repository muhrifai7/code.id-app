import React, {useState} from 'react';
import {StyleSheet, View, Text, StatusBar, ScrollView} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';

import {COLORS} from '../../contants';
import Materi from '../../components/Materi';
import Profile from '../../components/Profile';
import Gap from '../../components/Gap';
import LastMateri from '../../components/LastMateri';
import Banner from '../../components/Banner';
const Home = () => {
  const [state, setState] = useState({country: 'uk'});

  return (
    <ScrollView style={styles.container}>
      <View style={styles.wraper}>
        <StatusBar backgroundColor={COLORS.primary} />
        <Profile />
        <Gap height={17} />
        <View style={styles.titleMateri}>
          <Text style={styles.subTitle}>Materi Pelajaran</Text>
          <DropDownPicker
            items={[
              {
                label: '',
                value: 'usa',
                icon: () => (
                  <Text
                    style={{
                      color: COLORS.green,
                    }}>
                    SKD
                  </Text>
                ),
                hidden: true,
              },
              {
                label: '',
                value: 'uk',
                icon: () => (
                  <View>
                    <Text
                      style={{
                        color:
                          state.country == 'value' ? COLORS.green : COLORS.gray,
                      }}>
                      SKB
                    </Text>
                  </View>
                ),
              },
            ]}
            defaultValue={state.country}
            containerStyle={{height: 40}}
            style={{backgroundColor: '#fafafa'}}
            itemStyle={{
              justifyContent: 'flex-start',
            }}
            dropDownStyle={{backgroundColor: '#fafafa'}}
            onChangeItem={(item) =>
              setState({
                country: item.value,
              })
            }
          />
        </View>
        <Gap height={8} />
        <Materi />
        <Gap height={17} />
        <View style={styles.titleWrap}>
          <Text style={styles.subTitle}>Terakhir Di Pelajari</Text>
          <Text style={styles.lihatSemua}>Lihat Semua</Text>
        </View>
        <Gap height={17} />
        <LastMateri />
        <Gap height={17} />
        <Text style={styles.subTitle}>Survey Sbmptn</Text>
        <Gap height={17} />
        <Banner />
        <Gap height={17} />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    // flex: 1,
  },
  wraper: {
    backgroundColor: COLORS.primary,
    marginHorizontal: 15,
  },
  subTitle: {
    fontSize: 16,
  },
  titleWrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lihatSemua: {
    fontSize: 12,
    color: 'green',
  },
  titleMateri: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
