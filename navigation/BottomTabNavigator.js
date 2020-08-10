import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { Image } from 'react-native';
import styled from 'styled-components';
import { useTheme } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';
import BookmarkScreen from '../screens/BookmarkScreen';
import SearchBar from '../components/SearchBar';

const BottomTab = createBottomTabNavigator();

function getHeaderTitle(route,navigation, colors) {
  
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

  const View = styled.View`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `;

  const SearchView = styled.View`
    display:flex;
    flex-direction: row;
    background-color: ${props => props.theme.searchbar};
    width: 270px;
    padding:3px;
    margin: 10px;
  `;

  switch (routeName) {
    case 'Home':
      return () =>(
        <View>
          <Image
            style={{ width: 40, height: 40 }}
            source={require('../assets/icon.png')}
          />
          <SearchView>
            <Ionicons name='ios-search' size = {22} style={{margin:6}} color = {colors.text}/>
            <SearchBar />
          </SearchView>
        </View>
      );
    case 'Bookmark':
      return 'Bookmark';
    case 'Setting':
      return 'Setting';
  }
}

export default function BottomTabNavigator({ navigation, route }) {

  const { colors } = useTheme();

  navigation.setOptions({ 
    headerTitle: getHeaderTitle(route, navigation, colors),
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