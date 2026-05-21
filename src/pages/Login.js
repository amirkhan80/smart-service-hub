import React, { useState } from 'react';

import {
  Link,
  useNavigate
} from 'react-router-dom';

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] =
  useState('');

  const [password, setPassword] =
  useState('');

  const [showPassword,
  setShowPassword] =
  useState(false);

  const handleLogin = (e) => {

    e.preventDefault();

    /* ADMIN LOGIN */

    if(

      email === 'admin@gmail.com'

      &&

      password === 'admin'

    ){

      localStorage.setItem(

        'adminLogin',

        true

      );

      alert(
        'Admin Login Successful'
      );

      navigate('/admin');

      window.location.reload();

      return;

    }

    /* USER LOGIN */

    const savedUser = JSON.parse(

      localStorage.getItem(
        'smartUser'
      )

    );

    if(

      savedUser &&

      email === savedUser.email &&

      password === savedUser.password

    ){

      localStorage.setItem(
        'userLogin',
        true
      );

      alert(
        'Login Successful'
      );

      navigate('/');

      window.location.reload();

    }

    else{

      alert(
        'Invalid Email or Password'
      );

    }

  };

  return (

    <div className='auth-page'>

      <div className='auth-card'>

        <h1>

          Welcome Back 👋

        </h1>

        <form onSubmit={handleLogin}>

          <input
            type='email'
            placeholder='Email Address'
            value={email}
            onChange={(e)=>
              setEmail(e.target.value)
            }
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
              placeholder='Password'
              value={password}
              onChange={(e)=>
                setPassword(
                  e.target.value
                )
              }
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

            Login

          </button>

        </form>

        <p>

          Don't have an account?

          <Link to='/register'>

            Register

          </Link>

        </p>

      </div>

    </div>

  );
}

export default Login;