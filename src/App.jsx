import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import reduxStore from './store';
import Routes from './Routes';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Provider store={reduxStore}>
      <ToastContainer id="forToast" />
      <Routes />
    </Provider>
  );
}

export default App;
