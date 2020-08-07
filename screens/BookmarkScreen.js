import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import BookMarkCard from '../components/BookMarkCard';

export default function BookmarkScreen () {
  const DATA = [{
    thumnails : 'https://i.ytimg.com/vi/joPR2um5B5s/default.jpg',
    title : '백호 20학번 성공? 명지대 합불발표 100%실화 생중계 ㅋㅋㅋ',
    channelTitle: '백호'
  }];
  return (
  <SafeAreaView>
    <FlatList
      data = {DATA}
      renderItem={({ item }) => (
        <BookMarkCard
          thumnails = {item.thumnails}
          title = {item.title}
          channelTitle = {item.channelTitle}
        />
      )}
      keyExtractor={item => item.title}
    />
  </SafeAreaView>
  );
}