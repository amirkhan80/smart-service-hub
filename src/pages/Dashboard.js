import React from 'react';

function Dashboard() {
  return (
    <div className='container mt-5'>
      <h2>User Dashboard</h2>

      <div className='row mt-4'>
        <div className='col-md-4'>
          <div className='bg-primary dashboard-card'>
            <h3>Total Bookings</h3>
            <h1>25</h1>
          </div>
        </div>

        <div className='col-md-4'>
          <div className='bg-success dashboard-card'>
            <h3>Vehicles</h3>
            <h1>10</h1>
          </div>
        </div>

        <div className='col-md-4'>
          <div className='bg-danger dashboard-card'>
            <h3>Payments</h3>
            <h1>₹50K</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;