import produce from 'immer';

const initalState = {
  loading: false,
  videolist: null,
  theme:'light',
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
      break;
    case 'TOGGLE_DAY_NIGHT':
      state.theme = state.theme === 'light'?'dark':'light';
      state.loading = false;
      break;
    default:
      break;
  }
},initalState);

export default reducer;