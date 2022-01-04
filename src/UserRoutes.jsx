import React from 'react';
import { Routes, Route, Navigate, BrowserRouter as Router } from 'react-router-dom';

import AdminScreen from './containers/AdminScreen';
import AuthScreen from './containers/AuthScreen';
import MainScreen from './containers/MainScreen';

const userRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/auth" element={<AuthScreen />} />

        <Route exact path="/admin" element={<AdminScreen />} />

        <Route path="/" element={<MainScreen />}/>

        <Route
          path="*"
          element={<Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
};

export default userRoutes;