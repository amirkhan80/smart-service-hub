import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Admin from './pages/Admin';
import Navbar from './components/Navbar';
import MyBookings from './pages/MyBookings';
import MyVehicles from './pages/MyVehicles';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Booking from './pages/Booking';
import Dashboard from './pages/Dashboard';

import './App.css';

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path='/'
          element={<Home />}
        />

        <Route
          path='/login'
          element={<Login />}
        />
        <Route
  path='/admin'
  element={<Admin />}
/>
        <Route
          path='/register'
          element={<Register />}
        />
        <Route
  path='/myvehicles'
  element={<MyVehicles />}
/>
        <Route
          path='/booking'
          element={<Booking />}
        />
        <Route
  path='/mybookings'
  element={<MyBookings />}
/>
        <Route
          path='/dashboard'
          element={<Dashboard />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;