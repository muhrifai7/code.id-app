import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

import {COLORS, FONTS} from '../contants';
import {Home, Latihan, Dashboard} from '../pages';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          title: 'Dashboard',
          headerStyle: {
            backgroundColor: COLORS.primary,
            elevation: 0,
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontFamily: FONTS.family,
          },
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Materi',
          headerStyle: {
            backgroundColor: COLORS.primary,
            elevation: 0,
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontFamily: FONTS.family,
          },
          headerRight: () => (
            <Icon
              name="ios-search-outline"
              color="#000"
              size={24}
              onPress={() => {}}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Latihan"
        component={Latihan}
        name="Latihan"
        component={Latihan}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: COLORS.primary,
            elevation: 0,
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontFamily: FONTS.family,
          },
          headerRight: () => (
            <TouchableOpacity>
              <View style={styles.wraperButton}>
                <Icon
                  name="download"
                  color="#fff"
                  size={16}
                  onPress={() => {}}
                />
                <Text style={styles.textButton}>Download soal</Text>
              </View>
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  wraperButton: {
    backgroundColor: COLORS.green,
    padding: 5,
    marginTop: 15,
    marginRight: 10,
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 5,
  },
  textButton: {
    fontSize: 12,
    color: '#fff',
  },
});

export {MainApp};
