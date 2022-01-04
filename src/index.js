import React from 'react';
import ReactDOM from 'react-dom';
import {
  RecoilRoot,
} from 'recoil';
import UserRoutes from './UserRoutes';

ReactDOM.render(
  <>
    <RecoilRoot>
      <UserRoutes />
    </RecoilRoot>
  </>,
  document.getElementById('root')
);
