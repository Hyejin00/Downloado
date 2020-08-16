import React, {useState} from 'react';
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import DownLoadModal from './DownLoadModal';
import ytdl from "react-native-ytdl";
import { useTheme } from '@react-navigation/native';

export default function VideoCard({ thumnails, title, channelTitle, publishedAt, videoLink}){
  //const text = async() =>{
  //  const youtubeURL = 'https://www.youtube.com/watch?v=3b0tY6DRqgU&t=1897s';
  //  const urls = await ytdl(youtubeURL, { quality: 'highestaudio' });
  //  console.log(urls);
  //  }
  //text();

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
    padding: 0;
  `;

  const InfoView = styled.View`
    display:flex;
    padding: 5px;
    width: 76%;
  `;

  const DetailText = styled.Text`
    color:${props => props.theme.detailedText};
    margin: 0 20px;
  `;

  const TextView = styled.View`
    display:flex;
    flex:1;
    flex-direction: row;
  `;

  const IconView = styled.View`
    display:flex;
    flex:1;
    flex-direction: row;
    align-items: center;
    padding: 6px;
  `;

  const IconBtn = styled.TouchableOpacity`
    padding: 5px;
  `;

  const [modalVisible, setModalVisible] = useState(false);
  const { colors } = useTheme();

  return (
    <CardView>
      <DownLoadModal link = {videoLink} title={title} modalVisible={modalVisible} setModalVisible= {setModalVisible}/>
      <ThumbnailImg source = {{uri:thumnails}}/>
      <TextView>
        <InfoView>
          <TitleText ellipsizeMode = 'tail' numberOfLines={2}>{title}</TitleText>
          <DetailText>{channelTitle} · {publishedAt}</DetailText>
        </InfoView>
        <IconView>
          <FontAwesome name="bookmark-o" size={30} color={colors.text} style={{marginRight:5}}/>
          <IconBtn
            onPress={()=>{setModalVisible(true)}}
          >
            <AntDesign name="download" size={30} color={colors.text}/>
          </IconBtn>
        </IconView>
      </TextView>
    </CardView>
  );
}