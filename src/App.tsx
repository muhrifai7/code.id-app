/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainApp } from './router';


const App: React.FC = () => {
  return (
    <NavigationContainer>
      <MainApp />
    </NavigationContainer>
  );
};

export default App;
