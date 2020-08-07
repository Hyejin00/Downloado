import React from 'react';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import NavigationBundle from './navigation/RootNavigation';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {
// light, dark-후에 리덕스로 바꾸고 저장소에서 setTheme함수 가져오는 액션 만들어서 setting Screen에서 부르기.
  return (
    <Provider store = {store}>
      <NavigationBundle />
    </Provider>
  );
}