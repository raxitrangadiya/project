import React from 'react';
import { Provider } from 'react-redux';
import CustomStore from './Store/Customstore.jsx';
const App = () => {
  return (
    <>
     <Provider store={CustomStore}>
      </Provider> 
    </>
  );
};

export default App;