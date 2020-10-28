import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Gap = ({width, height}) => {
  const [state, setState] = useState();

  return <View style={{width: width, height: height}}></View>;
};

export default Gap;

const styles = StyleSheet.create({});
