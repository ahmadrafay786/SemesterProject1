import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/SignIn" element={<SignInForm />} />
        <Route path="/SignUp" element={<SignUpForm />} />
      </Routes>
    </Router>
  );
};

export default App;
