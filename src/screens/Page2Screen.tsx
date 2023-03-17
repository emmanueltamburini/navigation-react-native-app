import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../theme/appTheme';

export const Page2Screen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.globalMargin}>
      <Text>Page2Screen</Text>
      <Button
        title="Go page 3"
        onPress={() => navigation.navigate('Page3Screen' as never)}
      />
    </View>
  );
};
