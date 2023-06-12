import logo from './logo.svg';
import React from 'react';
import './App.css';
import Login from './Pages/login/login';
import SignUp from './Pages/signup/SignUp';
import Dashboard from './Pages/dashboard/Dashboard';
import Error from './Pages/login/errorPage/Error';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <div><Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/404" element={<Error />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Login />} />
        </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
