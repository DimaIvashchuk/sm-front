import React from 'react';
import { Routes, Route, Navigate } from 'react-router';


import withFooter from '../hoc/withFooter';
import withHeader from '../hoc/WithHeader';

const MainScreen = () => {
  return (
    <div>
      
    </div>
  );
};

export default withHeader(withFooter(MainScreen));
