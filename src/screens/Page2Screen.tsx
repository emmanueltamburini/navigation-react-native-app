import {useNavigation} from '@react-navigation/core';
import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../theme/appTheme';

export const Page2Screen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: 'Page 2 by navigation',
      headerBackTitle: 'Back',
    });
  }, [navigation]);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page2Screen</Text>
      <Button
        title="Go page 3"
        onPress={() => navigation.navigate('Page3Screen' as never)}
      />
    </View>
  );
};
