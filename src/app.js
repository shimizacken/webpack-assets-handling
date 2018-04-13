import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/common.css';
import './styles/main.css';
import './styles/controls.css';
import './styles/top-menu.scss';

const mainWrapperPath = './components/mainWrapper';
const MainWrapper = require('./components/mainWrapper').default;

window.onload = () => {

  const render = Component => {

    ReactDOM.render(
      <AppContainer>
        <Component />
      </AppContainer>,
      document.getElementById('root'));
  };
  
  render(MainWrapper);

  if (module.hot) {
    
    module.hot.accept(mainWrapperPath, () => {
      
      const MainWrapper = require(mainWrapperPath).default;
      render(MainWrapper);
    });
  }

};