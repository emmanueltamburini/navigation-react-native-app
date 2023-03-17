import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Page1Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text>Page1Screen</Text>
      <Button
        title="Go page 2"
        onPress={() => navigation.navigate('Page2Screen')}
      />
    </View>
  );
};
