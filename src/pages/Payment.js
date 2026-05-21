import React, { useState } from 'react';

function Payment() {

  const [amount, setAmount] = useState('');

  const handlePayment = () => {
    alert('Payment Successful');
  };

  return (
    <div className='container mt-5'>

      <div className='row justify-content-center'>

        <div className='col-md-6'>

          <div className='card shadow p-4'>

            <h2 className='text-center mb-4'>
              Payment Gateway
            </h2>

            <input
              type='number'
              className='form-control mb-3'
              placeholder='Enter Amount'
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />

            <button
              className='btn btn-success w-100'
              onClick={handlePayment}
            >
              Pay Now
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Payment;