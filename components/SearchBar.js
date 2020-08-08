import React, {useState} from 'react';
import styled from 'styled-components/native';
import { useTheme } from '@react-navigation/native';

const Container = styled.View`
  position: absolute;

`;

const TextInput = styled.TextInput`
    width:100%;
    backfround-color: ${props => props.theme.searchbar}
  `;

export default function SearchBar({ navigation }) {
  
  const { colors } = useTheme();
  const [word, setWord] = useState('');

  return (
    <Container>
      <TextInput />
      <Ionicons name="ios-search" size={24} color={colors.text} style={{marginRight: 23}}/>
    </Container>
  );
}