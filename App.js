import * as React from 'react';
import { Provider } from 'react-redux'
import { NativeBaseProvider } from "native-base";

import store from './src/globalReducer';

import Router from "./src/Router";

function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <Router />
      </NativeBaseProvider>
    </Provider>
  );
}

export default App;