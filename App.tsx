import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SideMenu} from './src/navigation/SideMenu';
import {defaultTheme} from './src/theme/appTheme';
import {Provider as PaperProvider} from 'react-native-paper';

const theme = {
  ...defaultTheme,
};

export const App = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <SideMenu />
      </NavigationContainer>
    </PaperProvider>
  );
};
