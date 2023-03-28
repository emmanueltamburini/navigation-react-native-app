import React from 'react';
import {View, Text} from 'react-native';
import {colors, styles} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tab1Screen = () => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Icons</Text>
      <Text>
        <Icon name="rocket" size={65} color={colors.primary} />
        <Icon name="airplane-outline" size={65} color={colors.primary} />
        <Icon name="analytics-outline" size={65} color={colors.primary} />
        <Icon name="at-circle-outline" size={65} color={colors.primary} />
        <Icon name="happy-outline" size={65} color={colors.primary} />
      </Text>
    </View>
  );
};
