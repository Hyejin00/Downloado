import produce from 'immer';

const initalState = {
  loading: false,
  videolist: null,
}

const reducer = produce((state, action)=>{
  switch(action.type){
    case 'START_LOADING':
      state.loading = true;
      break;
    case 'END_LOADING':
      state.loading = false;
      break;
    case 'FETCH_VIDEOLIST':
      state.videolist = action.payload;
      state.loading = false;
    default:
      break;
  }
},initalState);

export default reducer;