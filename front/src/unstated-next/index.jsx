import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import RootContainer from './containers';

ReactDOM.render(
  <RootContainer.Provider>
    <App />
  </RootContainer.Provider>,
  document.getElementById('app')
);
