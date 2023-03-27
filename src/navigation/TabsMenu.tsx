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
import {Tab2Screen} from '../screens/Tab2Screen';
import {StackNavigator} from './StackNavigator';
import {colors} from '../theme/appTheme';
import {Platform, Text} from 'react-native';
import {RouteProp, ParamListBase} from '@react-navigation/native';

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
  tabBarIcon: ({color}: {focused: boolean; color: string; size: number}) => {
    let iconName: string = '';

    switch (route.name) {
      case 'Tab1Screen':
        iconName = 'T1';
        break;

      case 'Tab2Screen':
        iconName = 'T2';
        break;

      case 'StackNavigator':
        iconName = 'ST';
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
    let iconName: string = '';

    switch (route.name) {
      case 'Tab1Screen':
        iconName = 'T1';
        break;

      case 'Tab2Screen':
        iconName = 'T2';
        break;

      case 'StackNavigator':
        iconName = 'ST';
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
        name="Tab2Screen"
        options={{title: 'Tab2'}}
        component={Tab2Screen}
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
        name="Tab2Screen"
        options={{title: 'Tab2'}}
        component={Tab2Screen}
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
