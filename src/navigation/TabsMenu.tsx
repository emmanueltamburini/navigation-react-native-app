import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab1Screen} from '../screens/Tab1Screen';
import {Tab2Screen} from '../screens/Tab2Screen';
import {StackNavigator} from './StackNavigator';
import {colors} from '../theme/appTheme';
import {Text} from 'react-native';

const Tab = createBottomTabNavigator();

const iconB1 = (props: {focused: boolean; color: string; size: number}) => (
  <Text style={{color: props.color}}>B1</Text>
);

export const TabsMenu = () => {
  return (
    <Tab.Navigator
      initialRouteName="Tab1Screen"
      sceneContainerStyle={{
        backgroundColor: colors.white,
      }}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 13,
        },
      }}>
      <Tab.Screen
        name="Tab1Screen"
        options={{title: 'Tab1', tabBarIcon: iconB1}}
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
