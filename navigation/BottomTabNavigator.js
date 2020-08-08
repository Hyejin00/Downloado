import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Image } from 'react-native';
import styled from 'styled-components/native';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { useTheme } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';
import BookmarkScreen from '../screens/BookmarkScreen';

const BottomTab = createBottomTabNavigator();

function LogoTitle() {
  const LogoView = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
  `;

  const LogoText = styled.Text`
   font-size: 20px;
   font-weight: bold;
   margin-left: 10px;
   color: ${props => props.theme.text};
  `;
  return (
    <LogoView>
      <Image
        style={{ width: 35, height: 35 }}
        source={require('../assets/icon.png')}
      />
      <LogoText>Downloado</LogoText>
    </LogoView>
  );
}

function getHeaderTitle(route,navigation) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

  switch (routeName) {
    case 'Home':
      return () => <LogoTitle />;
    case 'Bookmark':
      return 'Bookmark';
    case 'Setting':
      return 'Setting';
  }
}

function getHeaderRight(route, navigation, colors){
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

  switch (routeName) {
    case 'Home':
      return () => <Ionicons name="ios-search" size={24} color={colors.text} style={{marginRight: 23}}/>;
  }
}

export default function BottomTabNavigator({ navigation, route }) {

  const { colors } = useTheme();

  navigation.setOptions({ 
    headerTitle: getHeaderTitle(route, navigation),
    headerRight: getHeaderRight(route, navigation, colors)
  });

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
    >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({color}) => <TabBarIcon name="md-home" color={color} size={25}/>,
        }}
      />
      <BottomTab.Screen
        name="Bookmark"
        component={BookmarkNavigator}
        options={{
          tabBarIcon: ({color}) => <TabBarIcon name="md-heart" color={color} size={23}/>,
        }}
      />
      <BottomTab.Screen
        name="Setting"
        component={SettingNavigator}
        options={{
          tabBarIcon: ({color}) => <TabBarIcon name="md-settings" color={color} size={23}/>,
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props) {
  return <Ionicons style={{ marginBottom: -7 }} {...props} />;
}

const HomeStack = createStackNavigator();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTitle: () => <LogoTitle />,
          headerRight: (props) => {
            return <SearchIcon {...props}/>;
          },
        }}
      />
    </HomeStack.Navigator>
  );
}

const BookmarkStack = createStackNavigator();

function BookmarkNavigator() {
  return (
    <BookmarkStack.Navigator>
      <BookmarkStack.Screen
        name="BookmarkScreen"
        component={BookmarkScreen}
        options={{ headerTitle: 'Bookmark' }}
      />
    </BookmarkStack.Navigator>
  );
}

const SettingStack = createStackNavigator();

function SettingNavigator() {
  return (
    <SettingStack.Navigator>
      <SettingStack.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{ headerTitle: 'Setting' }}
      />
    </SettingStack.Navigator>
  );
}