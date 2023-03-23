import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SideMenu} from './src/navigation/SideMenu';

export const App = () => {
  return (
    <NavigationContainer>
      <SideMenu />
    </NavigationContainer>
  );
};
