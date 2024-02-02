// Import necessary modules and components
import React from 'react';
import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import './Signupform.css'; // Import your CSS file

// Signupform component
const Signupform = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  // State to manage form data and show/hide password
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  // Handler function for form input changes
  function changehandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  // Handler function for form submission
  function submitHandler(event) {
    event.preventDefault();
    
    // Simple password matching check
    if (formData.password !== formData.confirmPassword) {
      toast.error('Password do not match');
      return;
    }

    // Set user as logged in and show success message
    setIsLoggedIn(true);
    toast.success('Account Created Successfully');

    // Simulate sending account data to the server
    const accountData = {
      ...formData,
    };
    console.log('Printing account data');
    console.log(accountData);

    // Navigate to the dashboard
    navigate('/dashboard');
  }

  // Render the signup form
  return (
    <div className="signup-container">
      <div className="user-type-buttons">
        <button>Student</button>
        <button>Instructor</button>
      </div>

      <form className="signup-form" onSubmit={submitHandler}>
        <div className="name-inputs">
          <label>
            <p>First Name<sup>*</sup></p>
            <input
              required
              type="text"
              name="firstname"
              onChange={changehandler}
              placeholder="Enter First Name"
              value={formData.firstname}
            />
          </label>

          <label>
            <p>Last Name<sup>*</sup></p>
            <input
              required
              type="text"
              name="lastname"
              onChange={changehandler}
              placeholder="Enter Last Name"
              value={formData.lastname}
            />
          </label>
        </div>

        <label>
          <p>Email Address<sup>*</sup></p>
          <input
            required
            type="email"
            name="email"
            onChange={changehandler}
            placeholder="Enter Email Address"
            value={formData.email}
          />
        </label>

        <div className="password-inputs">
          <label>
            <p>Create Password<sup>*</sup></p>
            <input
              required
              type={showPassword ? 'text' : 'password'}
              name="password"
              onChange={changehandler}
              placeholder="Enter Password"
              value={formData.password}
            />
            <span onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>

          <label>
            <p>Confirm Password<sup>*</sup></p>
            <input
              required
              type={showPassword ? 'text' : 'password'}
              name="confirmPassword"
              onChange={changehandler}
              placeholder="Confirm Password"
              value={formData.confirmPassword}
            />
            <span onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>
        </div>

        <button className="create-account-button">Create Account</button>
      </form>
    </div>
  );
};

// Export the Signupform component as the default export
export default Signupform;
