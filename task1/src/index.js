import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './reducer/store';
import ComponentA from './ComponentA';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ComponentA/>
    </Provider>
</React.StrictMode>
);


