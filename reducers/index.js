import produce from 'immer';

const initalState = {
  loading: false,
}

const reducer = produce((state, action)=>{
  switch(action.type){
    case 'START_LOADING':
      state.loading = true;
      break;
    case 'END_LOADING':
      state.loading = false;
      break;
    default:
      break;
  }
},initalState);

export default reducer;