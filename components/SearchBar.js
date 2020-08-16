import React, { useState } from 'react';
import { TextInput } from 'react-native';

export default function SearchBar({ navigation }) {
  
  const [ word, setWord ] = useState('');

  return (
    <TextInput style={{width:230, height: 30 }} value={word} onChangeText={(text)=>setWord(text)}/>
  );
}