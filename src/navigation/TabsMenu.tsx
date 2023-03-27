import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab1Screen} from '../screens/Tab1Screen';
import {Tab2Screen} from '../screens/Tab2Screen';
import {StackNavigator} from './StackNavigator';
import {colors} from '../theme/appTheme';
import {Text} from 'react-native';
import {RouteProp, ParamListBase} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const screenOptions = ({
  route,
}: {
  route: RouteProp<ParamListBase, string>;
  navigation: any;
}) => ({
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

export const TabsMenu = () => {
  return (
    <Tab.Navigator
      initialRouteName="Tab1Screen"
      sceneContainerStyle={{
        backgroundColor: colors.white,
      }}
      screenOptions={screenOptions}>
      <Tab.Screen
        name="Tab1Screen"
        options={{title: 'Tab1'}}
        component={Tab1Screen}
      />
      <Tab.Screen
        name="Tab2Screen"
        options={{title: 'Tab2'}}
        component={Tab2Screen}
      />
      <Tab.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
};
