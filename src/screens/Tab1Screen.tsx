import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/appTheme';
import {TouchableIcon} from '../components/TouchableIcon';

const onPress = () => console.log('tap');

export const Tab1Screen = () => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Icons</Text>
      <Text>
        <TouchableIcon name="rocket" size={65} onPress={onPress} />
        <TouchableIcon name="airplane-outline" size={65} onPress={onPress} />
        <TouchableIcon name="analytics-outline" size={65} onPress={onPress} />
        <TouchableIcon name="at-circle-outline" size={65} onPress={onPress} />
        <TouchableIcon name="happy-outline" size={65} onPress={onPress} />
      </Text>
    </View>
  );
};
