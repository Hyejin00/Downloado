import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NotFoundScreen from './screens/NotFoundScreen';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import ThemeColor from './constants/ThemeColor';
import { ThemeProvider } from 'styled-components';

export default function App() {

  const [theme, setTheme] = useState('light'); // light, dark-후에 리덕스로 바꾸고 저장소에서 setTheme함수 가져오는 액션 만들어서 setting Screen에서 부르기.
  const isDark = theme==='dark';
  const navigationTheme = {
    dark: isDark,
    colors: {
      primary: isDark?'#E0E0E0':'#E74C3C',
      background: isDark?'#212121':'#F5F5F5',
      card: isDark?'#212121':'#F5F5F5',
      text: isDark?'#E0E0E0':'#212121',
      border: '#424242',
      notification: '#E74C3C',
    },
  }

  return (
    <ThemeProvider theme={ThemeColor[theme]}>
      <NavigationContainer theme={navigationTheme}>
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