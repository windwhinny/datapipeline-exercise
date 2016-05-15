import React from 'react';
import ReactDOM from 'react-dom';
import SideBar from './SideBar';
import hireInfo from './mocks/hireInfo';

ReactDOM.render(
  <SideBar hireInfo={hireInfo} />,
  document.querySelector('#app')
);
