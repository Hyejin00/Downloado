import React, { useEffect, useState } from 'react';
import { FlatList, Text, SafeAreaView, Alert } from 'react-native';
import { fetchVideoList } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import VideoCard from '../components/VideoCard';

export default function HomeScreen(){

  const dispatch = useDispatch();
  const loading = useSelector(state => state.loading);
  const videolist = useSelector(state => state.videolist);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(()=>{
    // dispatch(fetchVideoList());
  },[])

  const DATA = [
    {
      "channelId": "UC5qi_h9tMFCMrlmP3ZKkspA",
      "channelTitle": "백호",
      "description": "명지대 원서 딱들어간다 입벌려 ㅋㅋ 그리고 ... https://youtu.be/-gaBg3kyIRs.",
      "id": "joPR2um5B5",
      "kind": "youtube#video",
      "link": "https://www.youtube.com/watch?v=joPR2um5B5s",
      "publishedAt": "2020-05-10T06:58:45Z",
      "thumbnails": {/*100%, 200px */
        "default": {
          "height": 90,
          "url": "https://i.ytimg.com/vi/joPR2um5B5s/default.jpg",
          "width": 120,
        },
        "high": {
          "height": 360,
          "url": "https://i.ytimg.com/vi/joPR2um5B5s/hqdefault.jpg",
          "width": 480,
        },
        "medium": {
          "height": 180,
          "url": "https://i.ytimg.com/vi/joPR2um5B5s/mqdefault.jpg",
          "width": 320,
        },
      },
      "title": "백호 20학번 성공? 명지대 합불발표 100%실화 생중계 ㅋㅋㅋ",
    },
    {
      "channelId": "UC5qi_h9tMFCMrlmP3ZKkspA",
      "channelTitle": "백호",
      "description": "명지대 원서 딱들어간다 입벌려 ㅋㅋ 그리고 ... https://youtu.be/-gaBg3kyIRs.",
      "id": "joPR2um55s",
      "kind": "youtube#video",
      "link": "https://www.youtube.com/watch?v=joPR2um5B5s",
      "publishedAt": "2020-05-10T06:58:45Z",
      "thumbnails": {/*100%, 200px */
        "default": {
          "height": 90,
          "url": "https://i.ytimg.com/vi/joPR2um5B5s/default.jpg",
          "width": 120,
        },
        "high": {
          "height": 360,
          "url": "https://i.ytimg.com/vi/joPR2um5B5s/hqdefault.jpg",
          "width": 480,
        },
        "medium": {
          "height": 180,
          "url": "https://i.ytimg.com/vi/joPR2um5B5s/mqdefault.jpg",
          "width": 320,
        },
      },
      "title": "백호 20학번 성공? 명지대 합불발표 100%실화 생중계 ㅋㅋㅋ",
    },
    {
      "channelId": "UC5qi_h9tMFCMrlmP3ZKkspA",
      "channelTitle": "백호",
      "description": "명지대 원서 딱들어간다 입벌려 ㅋㅋ 그리고 ... https://youtu.be/-gaBg3kyIRs.",
      "id": "joPR2um5B5s",
      "kind": "youtube#video",
      "link": "https://www.youtube.com/watch?v=joPR2um5B5s",
      "publishedAt": "2020-05-10T06:58:45Z",
      "thumbnails": {/*100%, 200px */
        "default": {
          "height": 90,
          "url": "https://i.ytimg.com/vi/joPR2um5B5s/default.jpg",
          "width": 120,
        },
        "high": {
          "height": 360,
          "url": "https://i.ytimg.com/vi/joPR2um5B5s/hqdefault.jpg",
          "width": 480,
        },
        "medium": {
          "height": 180,
          "url": "https://i.ytimg.com/vi/joPR2um5B5s/mqdefault.jpg",
          "width": 320,
        },
      },
      "title": "백호 20학번 성공? 명지대 합불발표 100%실화 생중계 ㅋㅋㅋ",
    },
  ];

  return (
    loading?<Text>loading</Text>:<SafeAreaView>
      <FlatList
        data = {DATA}
        renderItem={({ item }) => (
          <VideoCard
            title = {item.title}
            thumnails={item.thumbnails.high.url}
            channelTitle = {item.channelTitle}
            publishedAt = {item.publishedAt}
            videoLink = {item.link}
          />
        )}
        keyExtractor={item => item.id}
        onEndReached={() => (Alert.alert('End Reached!!'))}
        onEndReachedThreshold={0.5}
        onRefresh={() => {
          setRefreshing(true)
          setTimeout(function(){
            Alert.alert('zzzzzzzzzzzzzRefreshed!')
            setRefreshing(false)
            }, 10000);
        }}
        refreshing={refreshing}
      />
    </SafeAreaView>
  );
}