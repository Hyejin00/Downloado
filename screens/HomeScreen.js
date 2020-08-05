import * as React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

export default function HomeScreen(){

  const ThemedButton = styled.Text`
    color: ${props => props.theme.tint};
    border-radius: 10px;
    width: 80px;
  `;
  return (
    <View>
      <Text>HomeScreen</Text>
      <ThemedButton>Hi Im themed btn</ThemedButton>
    </View>
  );
}