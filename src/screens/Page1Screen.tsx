import React, {useEffect} from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import {styles} from '../theme/appTheme';
import {RootStackParams} from '../navigation/StackNavigator';
import {
  DrawerNavigationProp,
  DrawerScreenProps,
} from '@react-navigation/drawer';

interface Props extends DrawerScreenProps<RootStackParams, 'Page1Screen'> {}

const menuButton = (
  navigation: DrawerNavigationProp<RootStackParams, 'Page1Screen', undefined>,
): JSX.Element => (
  <Button title="Menu" onPress={() => navigation.toggleDrawer()} />
);

export const Page1Screen = ({navigation}: Props) => {
  const {width} = useWindowDimensions();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (width >= 650 ? null : menuButton(navigation)),
    });
  }, [navigation, width]);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page1Screen</Text>
      <Button
        title="Go page 2"
        onPress={() => navigation.navigate('Page2Screen')}
      />
      <Text>Navigate with arguments</Text>
      <View style={currentStyles.viewContainer}>
        <TouchableOpacity
          style={{...styles.bigButton, ...currentStyles.button1}}
          onPress={() =>
            navigation.navigate('PersonScreen', {
              id: 1,
              name: 'Emmanuel',
            })
          }>
          <Text style={styles.bigButtonText}>Emmanuel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.bigButton, ...currentStyles.button2}}
          onPress={() =>
            navigation.navigate('PersonScreen', {
              id: 2,
              name: 'Ana',
            })
          }>
          <Text style={styles.bigButtonText}>Ana</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const currentStyles = StyleSheet.create({
  viewContainer: {
    flexDirection: 'row',
  },
  button1: {
    backgroundColor: '#5856D6',
  },
  button2: {
    backgroundColor: '#FF9427',
  },
});
