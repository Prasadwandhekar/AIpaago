import React from 'react';
import './Template.css';
import Signupform from './Signupform';
import Loginform from './Loginform';

const Template = ({ title, desc1, desc2, image, formtype, setIsLoggedIn }) => {
  return (
    <div className='container'>
      <div className='title'>
        {/* Title and Description */}
        <h1>{title}</h1>
        <p>
          <span>{desc1}</span>
          <span>{desc2}</span>
        </p>

        {/* Render Signup or Login form based on formtype */}
        {formtype === 'signup' ? (
          <Signupform setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <Loginform setIsLoggedIn={setIsLoggedIn} />
        )}

        {/* OR Section */}
        <div className='or'>
          <div>
            <div></div>
            <p>OR</p>
            <div></div>
          </div>

          {/* SignUp With Google Button */}
          <button>
            <p>SignUp With Google</p>
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div>
        <img src={image} alt='Pattern' className='images' loading='lazy' />
      </div>
    </div>
  );
};

export default Template;
