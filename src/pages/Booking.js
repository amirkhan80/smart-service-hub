import React, { useState } from 'react';

import emailjs from '@emailjs/browser';

function Booking() {

  const [customerName, setCustomerName] =
  useState('');

  const [vehicleName, setVehicleName] =
  useState('');

  /* IMPORTANT */

  const [selectedService, setSelectedService] =
  useState('');

  const [serviceName, setServiceName] =
  useState('');

  const [servicePrice, setServicePrice] =
  useState('');

  const [bookingDate, setBookingDate] =
  useState('');

  /* BOOKING */

  const handleBooking = (e) => {

    e.preventDefault();

    const userData =
    JSON.parse(
      localStorage.getItem(
        'smartUser'
      )
    );

    const bookingData = {

      customerName,
      vehicleName,
      serviceName,
      servicePrice,
      bookingDate,

      userEmail:
      userData.email,

      status:
      'Pending'

    };

    const oldBookings =
    JSON.parse(
      localStorage.getItem('bookings')
    ) || [];

    const updatedBookings = [

      ...oldBookings,
      bookingData

    ];

    localStorage.setItem(

      'bookings',

      JSON.stringify(updatedBookings)

    );

    /* EMAIL SEND TO ADMIN */

    emailjs.send(

      'service_dsl4idc',

      'template_g1m36ad',

      {

        customer_name:
        customerName,

        vehicle_name:
        vehicleName,

        service_name:
        serviceName,

        booking_status:
        'Pending',

        to_email:
        'amirkhan91522@gmail.com'

      },

      '9rd_J3-eIUt1iLwqE'

    )

    .then(()=>{

      console.log(
        'Admin Email Sent'
      );

    })

    .catch((error)=>{

      console.log(error);

    });

    alert(
      'Booking Confirmed Successfully 🚗'
    );

    /* RESET */

    setCustomerName('');
    setVehicleName('');
    setSelectedService('');
    setServiceName('');
    setServicePrice('');
    setBookingDate('');

  };

  return (

    <div className='booking-page'>

      <div className='booking-container'>

        {/* LEFT */}

        <div className='booking-left'>

          <h1>

            Smart Vehicle Service

          </h1>

          <p>

            Book premium bike &
            car services with
            trusted mechanics and
            transparent pricing.

          </p>

          <img
            className='bmw-car'
            src='https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1200'
            alt='bmw'
          />

        </div>

        {/* RIGHT */}

        <div className='booking-right'>

          <h1>

            Book Service 🚗

          </h1>

          <form onSubmit={handleBooking}>

            {/* CUSTOMER */}

            <input
              type='text'
              placeholder='Customer Name'
              value={customerName}
              onChange={(e)=>
                setCustomerName(
                  e.target.value
                )
              }
              required
            />

            {/* VEHICLE */}

            <input
              type='text'
              placeholder='Vehicle Name'
              value={vehicleName}
              onChange={(e)=>
                setVehicleName(
                  e.target.value
                )
              }
              required
            />

            {/* SELECT */}

            <select

              className='service-select'

              value={selectedService}

              onChange={(e)=>{

                const selectedOption =
                e.target.options[
                  e.target.selectedIndex
                ];

                setSelectedService(
                  e.target.value
                );

                setServiceName(
                  selectedOption.text
                );

                setServicePrice(
                  e.target.value
                );

              }}

              required
            >

              <option value=''>

                -- Select Service --

              </option>

              {/* BIKE */}

              <optgroup label='🏍 Bike Services'>

                <option value='500'>
                  Basic Service — ₹500
                </option>

                <option value='800'>
                  Oil Change — ₹800
                </option>

                <option value='1200'>
                  Chain Lubrication — ₹1200
                </option>

                <option value='3000'>
                  Full Repair — ₹3000
                </option>

              </optgroup>

              {/* CAR */}

              <optgroup label='🚘 Car Services'>

                <option value='1500'>
                  Basic Service — ₹1500
                </option>

                <option value='2500'>
                  Oil Change — ₹2500
                </option>

                <option value='3500'>
                  AC Service — ₹3500
                </option>

                <option value='7000'>
                  Full Repair — ₹7000
                </option>

              </optgroup>

            </select>

            {/* SELECTED SERVICE */}

            {

              serviceName && (

                <div className='selected-service-mini'>

                  <span>

                    Selected :
                    {serviceName}

                  </span>

                </div>

              )

            }

            {/* DATE */}

            <input
              type='date'
              value={bookingDate}
              onChange={(e)=>
                setBookingDate(
                  e.target.value
                )
              }
              required
            />

            {/* PRICE */}

            <div className='price-box'>

              <h2>

                Total Price

              </h2>

              <span>

                ₹ {servicePrice || 0}

              </span>

            </div>

            {/* BUTTON */}

            <button type='submit'>

              Confirm Booking

            </button>

          </form>

        </div>

      </div>

    </div>

  );
}

export default Booking;