import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';
import BookmarkScreen from '../screens/BookmarkScreen';

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
    >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({color}) => <TabBarIcon name="md-home" color={color} size={27}/>,
        }}
      />
      <BottomTab.Screen
        name="bookmark"
        component={BookmarkScreen}
        options={{
          tabBarIcon: ({color}) => <TabBarIcon name="md-heart" color={color} size={25}/>,
        }}
      />
      <BottomTab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarIcon: ({color}) => <TabBarIcon name="md-settings" color={color} size={27}/>,
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props) {
  return <Ionicons style={{ marginBottom: -3 }} {...props} />;
}

const HomeStack = createStackNavigator();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: 'Home' }}
      />
    </HomeStack.Navigator>
  );
}