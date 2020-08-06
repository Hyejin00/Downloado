import React from 'react';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons'; 

export default function VideoCard({ thumnails, title, channelTitle, publishedAt}){
  const CardView = styled.View`
    width: 100%;
    height: 290px;
    background-color: ${props => props.theme.background};
  `;

  const ThumbnailImg = styled.Image`
    width: 100%;
    height: 200px;
  `;

  const TitleText = styled.Text`
    color: ${props => props.theme.text};
    margin: 0 10px;
    font-weight: bold;
    font-size: 16px;
    width: 92%
    padding: 0
  `;

  const InfoView = styled.View`
    display:flex;
    flex-direction: row;
    padding: 10px 10px 0px 10px;
    width: 88%;
  `;

  const DetailText = styled.Text`
    color:${props => props.theme.detailedText};
    margin: 0 20px;
  `;
  return (
    <CardView>
      <ThumbnailImg source = {{uri:thumnails}}/>
      <InfoView>
        <TitleText lineBreakMode = 'tail'>{title}</TitleText>
        <Feather name="download" size={40} color="black" />
      </InfoView>
      <DetailText>{channelTitle} · {publishedAt}</DetailText>
    </CardView>
  );
}