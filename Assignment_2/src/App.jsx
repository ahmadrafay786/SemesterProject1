import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ProfileCard from './components/ProfileCard';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';

const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/SignIn" element={<SignInForm />} />
          <Route path="/SignUp" element={<SignUpForm />} />
          <Route path="/ProfileCard" element={<ProfileCard />} />
          <Route path="/" element={<div>Welcome to the Home Page</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
