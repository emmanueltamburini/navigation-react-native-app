import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {EdgeInsets, useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../theme/appTheme';

export const SettingScreen = () => {
  const insets = useSafeAreaInsets();
  const currentStyles = currentStylesFunction(insets);

  return (
    <View style={currentStyles.container}>
      <Text style={styles.title}>SettingScreen</Text>
    </View>
  );
};

const currentStylesFunction = (insets: EdgeInsets) =>
  StyleSheet.create({
    container: {
      ...styles.globalMargin,
      marginTop: insets.top + 20,
    },
  });
