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
import {SettingScreen} from '../screens/SettingScreen';
import {styles, colors} from '../theme/appTheme';
import {TabsMenu} from './TabsMenu';
import Icon from 'react-native-vector-icons/Ionicons';

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
      <Drawer.Screen name="TabsMenu" component={TabsMenu} />
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
          onPress={() => navigation.navigate('TabsMenu')}>
          <Icon name="compass-outline" size={30} color={colors.black} />
          <Text style={styles.menuText}> Navigation</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate('SettingScreen')}>
          <Icon name="cog-outline" size={30} color={colors.black} />
          <Text style={styles.menuText}> Settings</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
