// Import necessary modules and components
import './App.css';
import Navbar from '../src/components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Home';
import Login from '../src/pages/Login';
import Signup from '../src/pages/Signup';
import Dashboard from '../src/pages/Dashboard';
import Accountpage from './pages/Accountpage';
import { useState } from 'react';

// Main App component
function App() {
  // Initialize state variables using the useState hook
  const [user, setUser] = useState({
    firstName: 'Prasad ',
    lastName: 'Wandhekar',
    email: 'prasadwandhekar25@gmail.com',
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className='App'>
      {/* Navbar component with isLoggedIn state and setIsLoggedIn function as props */}
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      {/* React Router Routes for different pages */}
      <Routes>
        {/* Home page */}
        <Route path='/' element={<Home />} />

        {/* Login page */}
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />

        {/* Signup page */}
        <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn} />} />

        {/* Dashboard page */}
        <Route path='/dashboard' element={<Dashboard />} />

        {/* Account page with user information passed as props */}
        <Route
          path='/accountpage'
          element={<Accountpage user={user} setUser={setUser} />}
        />
      </Routes>
    </div>
  );
}

// Export the App component as the default export
export default App;
