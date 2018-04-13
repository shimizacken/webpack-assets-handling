import React from 'react';
import ReactDOM from 'react-dom';
import ToolBar from './components/toolbar';
import Content from './components/content';

import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/common.css';
import './styles/main.css';
import './styles/controls.css';
import './styles/top-menu.scss';

const App = ({title}) => (
  <div className='main-wrapper'>
    <ToolBar />
    <div className='main-content'>
      <h1>
        {`${title}`}
      </h1>
      <Content />
    </div>
  </div>
 );

ReactDOM.render(
  <App title='Hello world!' />,
  document.getElementById('root')
);