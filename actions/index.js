import axios from 'axios';
import search from 'youtube-search';

const API_KEY = 'AIzaSyDcVF5mgjmIb7rDMw__BbEX2qoENj75AYs';

export function fetchVideoList(){
  return (dispatch) => {
    dispatch({type:'START_LOADING'});
    const opts = {
      maxResults : 3,
      key: API_KEY
    };
    search('', opts, (err, videolist)=>{
      console.log('받아온 데이터 list ===>', videolist);
      dispatch({type:'FETCH_VIDEOLIST', payload: videolist});
    });
  }
}