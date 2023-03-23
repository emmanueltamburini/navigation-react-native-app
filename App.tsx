import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SideBasicMenu} from './src/navigation/SideBasicMenu';

export const App = () => {
  return (
    <NavigationContainer>
      <SideBasicMenu />
    </NavigationContainer>
  );
};
