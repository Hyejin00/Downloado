import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

export default function BookMarkCard({ thumnails, title, channelTitle }) {
  const ListView = styled.View`
    width: 100%;
    height: 100px;
    padding: 10px;
    display:flex;
    flex-direction: row;
    background-color: ${props => props.theme.background}; 
  `;
  const ThumbnailImg = styled.Image`
    flex: 1.2;
  `;
  const TitleText = styled.Text`
    color: ${props => props.theme.text};
    font-weight: bold;
    font-size: 16px;
    width: 92%
    padding: 0
  `;
  const DetailText = styled.Text`
    color:${props => props.theme.detailedText};
  `;

  const InfoView = styled.View`
    flex:3;
    margin-left: 10px;
  `;
  return (
    <ListView>
      <ThumbnailImg source = {{uri:thumnails}}/>
      <InfoView>
        <TitleText ellipsizeMode = 'tail' numberOfLines={2}>{title}</TitleText>
        <DetailText>{channelTitle}</DetailText>
      </InfoView>
    </ListView>
  );
}