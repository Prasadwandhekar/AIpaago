// Import necessary modules and components
import React from 'react';
import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import './Loginform.css'; // Import your CSS file

// Loginform component
const Loginform = ({ setIsLoggedIn }) => {
  // Use the useNavigate hook for navigation
  const navigate = useNavigate();

  // State to manage form data and password visibility
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  // Handle changes in input fields
  function changehandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  // Handle form submission
  function submitHandler(event) {
    event.preventDefault();
    
    // Example of basic error handling (checking if email and password are not empty)
    if (!formData.email || !formData.password) {
      toast.error('Please fill in all the fields.');
      return;
    }

    // Set user as logged in and show success message
    setIsLoggedIn(true);
    toast.success('Logged In');

    // Navigate to the dashboard page
    navigate('/dashboard');
  }

  // Render the login form
  return (
    <form className="login-form" onSubmit={submitHandler}>
      {/* Email input field */}
      <label>
        <p>Email Address<sup>*</sup></p>
        <input
          required
          type="email"
          value={formData.email}
          onChange={changehandler}
          placeholder="Enter Emailid"
          name="email"
        />
      </label>

      <br />

      {/* Password input field with visibility toggle */}
      <label>
        <p>Password<sup>*</sup></p>
        <div className="password-input">
          <input
            required
            type={showPassword ? 'text' : 'password'}
            value={formData.password}
            onChange={changehandler}
            placeholder="Enter Password"
            name="password"
          />
          <span onClick={() => setShowPassword((prev) => !prev)}>
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
        </div>

        {/* Link to the "Forgot Password" page */}
        <Link to="#">
          <p className="forgot-password">Forgot Password</p>
        </Link>
      </label>

      {/* Sign In button */}
      <button className="signin-button">Sign In</button>
    </form>
  );
};

// Export the Loginform component as the default export
export default Loginform;
