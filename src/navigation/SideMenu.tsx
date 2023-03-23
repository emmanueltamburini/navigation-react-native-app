import React from 'react';
import {
  View,
  Text,
  useWindowDimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {StackNavigator} from './StackNavigator';
import {SettingScreen} from '../screens/SettingScreen';
import {styles} from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const SideMenu = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerContent={(props: DrawerContentComponentProps) =>
        innerMenuFunction(props)
      }
      screenOptions={{
        headerShown: false,
        drawerType: width >= 650 ? 'permanent' : 'front',
      }}>
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettingScreen" component={SettingScreen} />
    </Drawer.Navigator>
  );
};

const innerMenuFunction = (props: DrawerContentComponentProps) => (
  <InnerMenu {...props} />
);

const InnerMenu = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
          }}
          style={styles.avatar}
        />
      </View>
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate('StackNavigator')}>
          <Text style={styles.menuText}>Navigation</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate('SettingScreen')}>
          <Text style={styles.menuText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
