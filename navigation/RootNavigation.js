import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NotFoundScreen from '../screens/NotFoundScreen';
import BottomTabNavigator from './BottomTabNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeColor, NavigationColor } from '../constants/ThemeColor';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import {Text} from 'react-native'

export default function NavigationBundle() {
// light, dark-후에 리덕스로 바꾸고 저장소에서 setTheme함수 가져오는 액션 만들어서 setting Screen에서 부르기.
 
  const theme = useSelector(state => state.theme);
  const loading = useSelector(state => state.loading);
  const isDark = theme ==='dark';
  useEffect(()=>{
  },[theme]);
  return (
    <ThemeProvider theme={ThemeColor[theme]}>
      <NavigationContainer theme={NavigationColor(isDark)['navigationTheme']}>
        <RootNavigator/>
        <StatusBar />
      </NavigationContainer>
    </ThemeProvider>
  );
}

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}