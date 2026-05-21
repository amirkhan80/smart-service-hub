import React, {
  useEffect,
  useState
} from 'react';

import {
  Link,
  useNavigate
} from 'react-router-dom';

function Navbar() {

  const navigate = useNavigate();

  const [isLogin, setIsLogin] =
  useState(false);

  const [isAdmin, setIsAdmin] =
  useState(false);

  const [menuOpen, setMenuOpen] =
  useState(false);

  useEffect(() => {

    const user =
    localStorage.getItem(
      'userLogin'
    );

    const admin =
    localStorage.getItem(
      'adminLogin'
    );

    if(user){

      setIsLogin(true);

    }

    if(admin){

      setIsAdmin(true);

    }

  }, []);

  /* LOGOUT */

  const handleLogout = () => {

    localStorage.removeItem(
      'userLogin'
    );

    localStorage.removeItem(
      'adminLogin'
    );

    alert(
      'Logout Successful'
    );

    navigate('/login');

    window.location.reload();

  };

  return (

    <nav className='navbar'>

      <div className='logo'>

        Smart Service Hub

      </div>

      {/* MOBILE MENU BUTTON */}

      <div
        className='menu-icon'
        onClick={() =>
          setMenuOpen(!menuOpen)
        }
      >

        ☰

      </div>

      <div
        className={
          menuOpen
          ?
          'nav-links active'
          :
          'nav-links'
        }
      >

        <Link to='/'>
          Home
        </Link>

        <Link to='/mybookings'>
          Booking
        </Link>

        <Link to='/myvehicles'>
          My Vehicles
        </Link>

        {

          isAdmin && (

            <Link to='/admin'>

              Admin Panel

            </Link>

          )

        }

        {

          isLogin || isAdmin ? (

            <button
              type='button'
              className='logout-btn'
              onClick={handleLogout}
            >

              Logout

            </button>

          ) : (

            <>

              <Link to='/login'>
                Login
              </Link>

              <Link to='/register'>
                Register
              </Link>

            </>

          )

        }

      </div>

    </nav>

  );
}

export default Navbar;