import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {EdgeInsets, useSafeAreaInsets} from 'react-native-safe-area-context';
import {AuthContext} from '../context/AuthContext';
import {styles, colors} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

export const SettingScreen = () => {
  const insets = useSafeAreaInsets();
  const currentStyles = currentStylesFunction(insets);

  const {authState} = useContext(AuthContext);

  return (
    <View style={currentStyles.container}>
      <Text style={styles.title}>SettingScreen</Text>
      <Text>{JSON.stringify(authState, null, 4)}</Text>
      {authState.favoriteIcon && (
        <Icon name={authState.favoriteIcon} size={65} color={colors.primary} />
      )}
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
