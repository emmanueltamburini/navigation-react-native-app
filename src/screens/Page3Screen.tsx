import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Page3Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text>Page3Screen</Text>
      <Button title="Go back" onPress={() => navigation.pop()} />
      <Button title="Go page 1" onPress={() => navigation.popToTop()} />
    </View>
  );
};
