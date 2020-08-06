import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Switch } from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 

export default function SettingCard({ settingName }){

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const Container = styled.View`
    display:flex;
    flex-direction: row;
    width:100%;
    padding: 18px;
    padding-left: 26px;
    background-color: #fff;
  `;
  // ${props =>props.theme.background}
  const MenuName = styled.Text`
    margin-left:10px;
    color: ${props =>props.theme.text};
    font-size: 17px;
  `;

  const DayNightSwitch = styled.Switch`
    margin-left: auto;
  `;
  return (
    <Container>
      <Ionicons name={isEnabled?"ios-moon":"ios-sunny"} size={26} color={isEnabled?"white":"black"} />
      <MenuName>{settingName}</MenuName>
      <DayNightSwitch
        trackColor={{ false: "#7f8c8d", true: "#2c3e50" }}
        thumbColor={isEnabled ? "#3498db" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </Container>
  );
}