import React from 'react';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import SettingCard from '../components/SettingCard';

export default function SettingScreen(){
  const Container = styled.SafeAreaView`
    flex:1;
  `;

  const menuList = ['Day/Night']
  return (
    <Container>
      <FlatList
        data = {menuList}
        renderItem = {({ item })=>(
        <SettingCard
          settingName = {item}
        />
        )}
        keyExtractor={item => item}
      />
    </Container>
  );
}