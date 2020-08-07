import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';

export default function SettingCard({ settingName }){

  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme);
  const toggleSwitch = () => dispatch({type:'TOGGLE_DAY_NIGHT'});

  const Container = styled.View`
    display:flex;
    flex-direction: row;
    width:100%;
    padding: 18px;
    padding-left: 26px;
    background-color: ${props => props.theme.background};
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
      <Ionicons name={theme === 'light'?"ios-moon":"ios-sunny"} size={26} color={theme === 'light'?"white":"black"} />
      <MenuName>{settingName}</MenuName>
      <DayNightSwitch
        trackColor={{ 'light': "#7f8c8d", 'dark': "#2c3e50" }}
        thumbColor={theme === 'light'? "#3498db" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={theme}
      />
    </Container>
  );
}