import React from 'react';
import styled, {css} from 'styled-components/native';
import { Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

export default function DownLoadModal({ modalVisible, title , link }){

  const Container = styled.View`
    flex:1;
    justify-content: center;
    align-items: center;
  `;

  const ModalView = styled.View`
    width: 85%;
    height: 75%;
    padding: 10px;
    background-color: ${props => props.theme.background};
    ${Platform.select({
      ios: css`shadow-color: #000;
      shadow-offset: {width: 0, height: -1};
      shadow-opacity: 0.5;
      shadow-radius: 5;`,
      android: css`elevation: 11;`
    })}
  `;

  const TitleText = styled.Text`
    font-weight: bold;
    font-size: 18px;
    margin: 0 8px;
  `;
  
  const TitleView = styled.View`
    display: flex;
    margin:11px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `;

  const ContentText = styled.Text`
    font-weight: bold;
    font-size: 15px;
  `;

  const ContentView = styled.View`
    padding: 10px;
  `;

  const ControlView = styled.View`
    display:flex;
    
  `;
  return (
    <Modal
      animationType='fade'
      transparent={true}
      visible={modalVisible}
    >
      <Container>
        <ModalView>
          <TitleView>
            <AntDesign name="download" size={30} color="black" style={{marginLeft:30}}/>
            <TitleText ellipsizeMode = 'tail' numberOfLines={2}>{title}</TitleText>
          </TitleView>
          <ContentView>
            <ContentText>· 파일명</ContentText>
            <ContentText>· 품질 선택</ContentText>
          </ContentView>
        </ModalView>
      </Container>
    </Modal>
  );
}