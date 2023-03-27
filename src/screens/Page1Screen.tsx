import React, {useEffect} from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import {styles, colors} from '../theme/appTheme';
import {RootStackParams} from '../navigation/StackNavigator';
import {
  DrawerNavigationProp,
  DrawerScreenProps,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends DrawerScreenProps<RootStackParams, 'Page1Screen'> {}

const menuButton = (
  navigation: DrawerNavigationProp<RootStackParams, 'Page1Screen', undefined>,
): JSX.Element => (
  <TouchableOpacity
    activeOpacity={0.75}
    style={currentStyles.menuButton}
    onPress={() => navigation.toggleDrawer()}>
    <Icon name="menu-outline" size={30} color={colors.primary} />
  </TouchableOpacity>
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
      <Text style={currentStyles.bodyText}>Navigate with arguments</Text>
      <View style={currentStyles.viewContainer}>
        <TouchableOpacity
          style={{...styles.bigButton, ...currentStyles.button1}}
          onPress={() =>
            navigation.navigate('PersonScreen', {
              id: 1,
              name: 'Emmanuel',
            })
          }>
          <Icon name="person-outline" size={30} color={colors.white} />
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
          <Icon name="person-outline" size={30} color={colors.white} />
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
  bodyText: {
    marginVertical: 20,
    fontSize: 20,
  },
  button1: {
    backgroundColor: '#5856D6',
  },
  button2: {
    backgroundColor: '#FF9427',
  },
  menuButton: {
    marginLeft: 10,
  },
});
