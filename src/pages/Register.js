import React, { useState } from 'react';

import {
  Link,
  useNavigate
} from 'react-router-dom';

function Register() {

  const navigate = useNavigate();

  const [showPassword,
  setShowPassword] =
  useState(false);

  const [user, setUser] =
  useState({

    name:'',
    email:'',
    phone:'',
    password:''

  });

  const handleChange = (e) => {

    setUser({

      ...user,

      [e.target.name]:
      e.target.value

    });

  };

  const handleRegister = (e) => {

    e.preventDefault();

    localStorage.setItem(
      'smartUser',
      JSON.stringify(user)
    );

    alert(
      'Registration Successful'
    );

    navigate('/login');

  };

  return (

    <div className='auth-page'>

      <div className='auth-card'>

        <h1>
          Create Account 🚘
        </h1>

        <form
          onSubmit={handleRegister}
        >

          <input
            type='text'
            name='name'
            placeholder='Full Name'
            onChange={handleChange}
            required
          />

          <input
            type='email'
            name='email'
            placeholder='Email Address'
            onChange={handleChange}
            required
          />

          <input
            type='text'
            name='phone'
            placeholder='Phone Number'
            onChange={handleChange}
            required
          />

          <div
            className='password-box'
          >

            <input
              type={
                showPassword
                ?
                'text'
                :
                'password'
              }
              name='password'
              placeholder='Password'
              onChange={handleChange}
              required
            />

            <span
              className='show-btn'
              onClick={()=>
                setShowPassword(
                  !showPassword
                )
              }
            >

              {

                showPassword

                ?

                '🙈'

                :

                '👁️'

              }

            </span>

          </div>

          <button type='submit'>

            Register

          </button>

        </form>

        <p>

          Already have account?

          <Link to='/login'>
            Login
          </Link>

        </p>

      </div>

    </div>

  );
}

export default Register;