import React from 'react';

import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {
  MaterialBottomTabNavigationOptions,
  createMaterialBottomTabNavigator,
} from '@react-navigation/material-bottom-tabs';
import {Tab1Screen} from '../screens/Tab1Screen';
import {StackNavigator} from './StackNavigator';
import {colors} from '../theme/appTheme';
import {Platform, Text} from 'react-native';
import {RouteProp, ParamListBase} from '@react-navigation/native';
import {TopTapMenu} from './TopTapMenu';
import Icon from 'react-native-vector-icons/Ionicons';

const screenIOSOptions = ({
  route,
}: {
  route: RouteProp<ParamListBase, string>;
  navigation: any;
}): BottomTabNavigationOptions => ({
  tabBarActiveTintColor: colors.primary,
  tabBarStyle: {
    borderTopColor: 'red',
    borderTopWidth: 0,
    elevation: 0,
  },
  tabBarLabelStyle: {
    fontSize: 15,
  },
  tabBarIcon: ({
    color,
    size,
  }: {
    focused: boolean;
    color: string;
    size: number;
  }) => {
    let iconName: JSX.Element = (
      <Icon name="rocket" size={size} color={color} />
    );
    switch (route.name) {
      case 'Tab1Screen':
        iconName = <Icon name="rocket" size={size} color={color} />;
        break;

      case 'TopTapMenu':
        iconName = <Icon name="airplane-outline" size={size} color={color} />;
        break;

      case 'StackNavigator':
        iconName = <Icon name="bookmarks-outline" size={size} color={color} />;
        break;
    }
    return <Text style={{color}}>{iconName}</Text>;
  },
});

const screenAndroidOptions = ({
  route,
}: {
  route: RouteProp<ParamListBase, string>;
  navigation: any;
}): MaterialBottomTabNavigationOptions => ({
  tabBarIcon: ({color}: {focused: boolean; color: string}) => {
    let iconName: JSX.Element = <Icon name="rocket" size={24} color={color} />;
    switch (route.name) {
      case 'Tab1Screen':
        iconName = <Icon name="rocket" size={24} color={color} />;
        break;

      case 'TopTapMenu':
        iconName = <Icon name="airplane-outline" size={24} color={color} />;
        break;

      case 'StackNavigator':
        iconName = <Icon name="bookmarks-outline" size={24} color={color} />;
        break;
    }
    return <Text style={{color}}>{iconName}</Text>;
  },
});

const TabIOS = createBottomTabNavigator();
const TabAndroid = createMaterialBottomTabNavigator();

const TabsAndroidMenu = () => {
  return (
    <TabAndroid.Navigator
      initialRouteName="Tab1Screen"
      activeColor={colors.black}
      sceneAnimationEnabled={true}
      inactiveColor={colors.white}
      barStyle={{backgroundColor: colors.primary}}
      screenOptions={screenAndroidOptions}>
      <TabAndroid.Screen
        name="Tab1Screen"
        options={{title: 'Tab1'}}
        component={Tab1Screen}
      />
      <TabAndroid.Screen
        name="TopTapMenu"
        options={{title: 'Tab2'}}
        component={TopTapMenu}
      />
      <TabAndroid.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </TabAndroid.Navigator>
  );
};

const TabsIOSMenu = () => {
  return (
    <TabIOS.Navigator
      initialRouteName="Tab1Screen"
      sceneContainerStyle={{
        backgroundColor: colors.white,
      }}
      screenOptions={screenIOSOptions}>
      <TabIOS.Screen
        name="Tab1Screen"
        options={{title: 'Tab1'}}
        component={Tab1Screen}
      />
      <TabIOS.Screen
        name="TopTapMenu"
        options={{title: 'Tab2'}}
        component={TopTapMenu}
      />
      <TabIOS.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </TabIOS.Navigator>
  );
};

export const TabsMenu = () =>
  Platform.OS === 'ios' ? <TabsIOSMenu /> : <TabsAndroidMenu />;
