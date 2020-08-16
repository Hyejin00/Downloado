import React, { useState } from 'react';
import styled, {css} from 'styled-components/native';
import { Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';
import { useTheme } from '@react-navigation/native';

export default function DownLoadModal({ modalVisible, setModalVisible, title , link }){

  const [quality, setQuality] = useState('highest');
  const [format, setFormat] = useState('mp3');
  const { colors } = useTheme();

  const Container = styled.View`
    flex:1;
    justify-content: flex-end;
    align-items: center;
  `;

  const ModalView = styled.View`
    width: 100%;
    height: 45%;
    padding: 10px;
    background-color: ${props => props.theme.modalBackground};
    ${Platform.select({
      ios: css`shadow-color: #000;
      shadow-offset: {width: 0, height: -1};
      shadow-opacity: 0.5;
      shadow-radius: 5;`,
      android: css`elevation: 20;`
    })}
  `;

  const TitleText = styled.Text`
    font-weight: bold;
    font-size: 18px;
    margin: 0 8px;
    color: ${props => props.theme.text};
  `;
  
  const TitleView = styled.View`
    display: flex;
    margin:11px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `;

  const ContentView = styled.View`
    padding: 10px;
  `;

  const DownLoadBtn = styled.Button`
    width: 80%;
    height: 40px;
    margin: 10px 0; 
  `;
 // react- native-gesture에서 밑으로 내렸을때 visible false 만들기
  return (
    <Modal
      animationType='slide'
      transparent={true}
      onRequestClose = {() => (setModalVisible(false))}
      visible={modalVisible}
    >
      <Container>
        <ModalView>
          <TitleView>
            <AntDesign name="download" size={30} color={colors.text} style={{marginLeft:30}}/>
            <TitleText ellipsizeMode = 'tail' numberOfLines={2}>{title}</TitleText>
          </TitleView>
          <ContentView>
            <DropDownPicker
              items={[
                {label: 'highest', value: 'highest'},
                {label: 'lowest', value: 'lowest'},
              ]}
              defaultValue={quality}
              containerStyle={{
                height: 40,
                marginBottom: 20
              }}
              style={{backgroundColor: '#fff'}}
              itemStyle={{justifyContent: 'flex-start'}}
              dropDownStyle={{backgroundColor: '#fff'}}
              onChangeItem={item => setQuality(item.value)}
            />
            <DropDownPicker
              items={[
                {label: 'mp3', value: 'mp3'},
                {label: 'mp4', value: 'mp4'},
              ]}
              defaultValue={format}
              containerStyle={{height: 40, marginBottom: 20}}
              style={{backgroundColor: '#fff'}}
              itemStyle={{
                justifyContent: 'flex-start'
              }}
              dropDownStyle={{backgroundColor: '#fff'}}
              onChangeItem={item => setFormat(item.value)}
            />
            <DownLoadBtn
              onPress={() => console.log('zzzpress~~~~~~~~~~~~~')}
              title="Learn More"
              color = { colors.primary }
            />
          </ContentView>
        </ModalView>
      </Container>
    </Modal>
  );
}