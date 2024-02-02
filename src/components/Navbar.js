// Import necessary modules and components
import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import './Navbar.css'; // Import your CSS file

// Navbar component
const Navbar = (props) => {
  // Extract isLoggedIn and setIsLoggedIn from props
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

  // Render the navbar
  return (
    <div className='navbar'>
      {/* Logo and site name */}
      <Link to='/'>
        <img
          src='https://i.pinimg.com/564x/f2/2a/97/f22a97411e148b4d4f8a6a7d19c70b59.jpg'
          alt='images'
          width={160}
          height={80}
          loading='lazy'
          className='img'
        />
        <div className='study'>Study Notation</div>
      </Link>

      {/* Navigation links */}
      <nav className='section'>
        <ul className='bar'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/Accountpage'>Profile</Link>
          </li>
        </ul>
      </nav>

      {/* Login - signup - logout - Dashboard buttons */}
      <div className='btn'>
        {!isLoggedIn && (
          <Link to='/login'>
            <button className='loginbtn'>Log in</button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to='/signup'>
            <button className='signupbtn'>SignUp</button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to='/'>
            <button
              className='logoutbtn'
              onClick={() => {
                // Handle logout and show success message
                setIsLoggedIn(false);
                toast.success('Logged Out');
              }}
            >
              Log Out
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to='/dashboard'>
            <button className='dashboardbtn'>Dashboard</button>
          </Link>
        )}
      </div>
    </div>
  );
};

// Export the Navbar component as the default export
export default Navbar;
