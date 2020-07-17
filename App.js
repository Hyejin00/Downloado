import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NotFoundScreen from './screens/NotFoundScreen';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
      <StatusBar />
    </NavigationContainer>
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