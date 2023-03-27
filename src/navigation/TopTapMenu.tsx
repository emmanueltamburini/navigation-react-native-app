import React from 'react';
import {
  MaterialTopTabNavigationOptions,
  createMaterialTopTabNavigator,
} from '@react-navigation/material-top-tabs';
import {ChatScreen} from '../screens/ChatScreen';
import {ContactScreen} from '../screens/ContactScreen';
import {AlbumScreen} from '../screens/AlbumScreen';
import {StyleSheet, Text} from 'react-native';
import {EdgeInsets, useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from '../theme/appTheme';
import {RouteProp, ParamListBase} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

const screenOptions = ({
  route,
}: {
  route: RouteProp<ParamListBase, string>;
  navigation: any;
}): MaterialTopTabNavigationOptions => ({
  tabBarPressColor: colors.primary,
  tabBarShowIcon: true,
  tabBarIndicatorStyle: {
    backgroundColor: colors.primary,
    borderTopWidth: 0,
    elevation: 0,
  },
  tabBarStyle: {
    elevation: 0,
  },
  tabBarIcon: (_: {focused: boolean; color: string}) => {
    let iconName: JSX.Element = (
      <Icon name="rocket" size={24} color={colors.primary} />
    );
    switch (route.name) {
      case 'ChatScreen':
        iconName = (
          <Icon
            name="chatbox-ellipses-outline"
            size={24}
            color={colors.primary}
          />
        );
        break;

      case 'ContactScreen':
        iconName = (
          <Icon name="people-outline" size={24} color={colors.primary} />
        );
        break;

      case 'AlbumScreen':
        iconName = (
          <Icon name="albums-outline" size={24} color={colors.primary} />
        );
        break;
    }
    return <Text style={{color: colors.primary}}>{iconName}</Text>;
  },
});

export const TopTapMenu = () => {
  const insets = useSafeAreaInsets();
  const currentStyles = currentStylesFunction(insets);

  return (
    <Tab.Navigator
      style={currentStyles.container}
      sceneContainerStyle={{backgroundColor: colors.white}}
      screenOptions={screenOptions}>
      <Tab.Screen name="ChatScreen" component={ChatScreen} />
      <Tab.Screen name="ContactScreen" component={ContactScreen} />
      <Tab.Screen name="AlbumScreen" component={AlbumScreen} />
    </Tab.Navigator>
  );
};

const currentStylesFunction = (insets: EdgeInsets) =>
  StyleSheet.create({
    container: {
      paddingTop: insets.top,
    },
  });
