import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NotFoundScreen from './screens/NotFoundScreen';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import ThemeColor from './constants/ThemeColor';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { useDispatch, useSelector } from 'react-redux';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {
  const dispatch = useDispatch();
  // const theme = useSelector(state => state.theme);
  const theme = 'light';
// light, dark-후에 리덕스로 바꾸고 저장소에서 setTheme함수 가져오는 액션 만들어서 setting Screen에서 부르기.
  const isDark = theme ==='dark';
  const themeColor = ThemeColor(isDark);

  return (
    <Provider store={store}>
      <ThemeProvider theme={themeColor[theme]}>
        <NavigationContainer theme={themeColor['navigationTheme']}>
          <RootNavigator/>
          <StatusBar />
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
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