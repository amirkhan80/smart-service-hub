import React, {
  useEffect,
  useState
} from 'react';

import {
  useNavigate
} from 'react-router-dom';

import emailjs from '@emailjs/browser';

function Admin() {

  const navigate =
  useNavigate();

  const [bookings, setBookings] =
  useState([]);

  useEffect(() => {

    const admin =
    localStorage.getItem(
      'adminLogin'
    );

    if(!admin){

      navigate('/login');

    }

    const savedBookings =
    JSON.parse(
      localStorage.getItem(
        'bookings'
      )
    ) || [];

    setBookings(savedBookings);

  }, [navigate]);

  /* ACCEPT */

  const handleAccept = (index) => {

    const updatedBookings =
    [...bookings];

    updatedBookings[index].status =
    'Accepted';

    localStorage.setItem(

      'bookings',

      JSON.stringify(updatedBookings)

    );

    setBookings(updatedBookings);

    emailjs.send(

      'service_dsl4idc',

      'template_g1m36ad',

      {

        customer_name:
        updatedBookings[index]
        .customerName,

        vehicle_name:
        updatedBookings[index]
        .vehicleName,

        service_name:
        updatedBookings[index]
        .serviceName,

        booking_status:
        'Accepted',

        booking_date:
        updatedBookings[index]
        .bookingDate,

        to_email:
        updatedBookings[index]
        .userEmail

      },

      '9rd_J3-eIUt1iLwqE'

    )

    .then(()=>{

      alert(
        'Booking Accepted & Email Sent ✅'
      );

    })

    .catch((error)=>{

      console.log(error);

      alert(
        'Email Failed ❌'
      );

    });

  };

  /* REJECT */

  const handleReject = (index) => {

    const updatedBookings =
    [...bookings];

    updatedBookings[index].status =
    'Rejected';

    localStorage.setItem(

      'bookings',

      JSON.stringify(updatedBookings)

    );

    setBookings(updatedBookings);

    emailjs.send(

      'service_dsl4idc',

      'template_g1m36ad',

      {

        customer_name:
        updatedBookings[index]
        .customerName,

        vehicle_name:
        updatedBookings[index]
        .vehicleName,

        service_name:
        updatedBookings[index]
        .serviceName,

        booking_status:
        'Rejected',

        booking_date:
        updatedBookings[index]
        .bookingDate,

        to_email:
        updatedBookings[index]
        .userEmail

      },

      '9rd_J3-eIUt1iLwqE'

    )

    .then(()=>{

      alert(
        'Booking Rejected & Email Sent ❌'
      );

    })

    .catch((error)=>{

      console.log(error);

      alert(
        'Email Failed ❌'
      );

    });

  };

  /* DELETE */

  const handleDelete = (index) => {

    const confirmDelete =
    window.confirm(
      'Are you sure you want to delete this booking?'
    );

    if(confirmDelete){

      const updatedBookings =
      bookings.filter(

        (item,i)=> i !== index

      );

      localStorage.setItem(

        'bookings',

        JSON.stringify(updatedBookings)

      );

      setBookings(updatedBookings);

      alert(
        'Booking Deleted Successfully 🗑️'
      );

    }

  };

  return (

    <div className='admin-page'>

      <div className='admin-overlay'>

        <h1 className='admin-title'>

          Admin Dashboard 👨‍💼

        </h1>

        {

          bookings.length === 0 ? (

            <div className='empty-booking'>

              <h2>

                No Bookings Found

              </h2>

            </div>

          ) : (

            <div className='admin-grid'>

              {

                bookings.map(

                  (item,index)=>(

                  <div
                    className='admin-card'
                    key={index}
                  >

                    <h2>
                      {item.vehicleName}
                    </h2>

                    <p>

                      👤 Customer :
                      <strong>
                        {item.customerName}
                      </strong>

                    </p>

                    <p>

                      🔧 Service :
                      <strong>
                        {item.serviceName}
                      </strong>

                    </p>

                    <p>

                      💰 Price :
                      <strong>
                        ₹ {item.servicePrice}
                      </strong>

                    </p>

                    <p>

                      📅 Date :
                      <strong>
                        {item.bookingDate}
                      </strong>

                    </p>

                    <p>

                      📧 User Email :
                      <strong>
                        {item.userEmail}
                      </strong>

                    </p>

                    <div className='status-box'>

                      Status :

                      <span
                        className={
                          item.status ===
                          'Accepted'

                          ?

                          'accepted'

                          :

                          item.status ===
                          'Rejected'

                          ?

                          'rejected'

                          :

                          'pending'
                        }
                      >

                        {

                          item.status ||

                          'Pending'

                        }

                      </span>

                    </div>

                    <div className='admin-buttons'>

                      <button
                        className='accept-btn'
                        onClick={()=>
                          handleAccept(index)
                        }
                      >

                        Accept

                      </button>

                      <button
                        className='reject-btn'
                        onClick={()=>
                          handleReject(index)
                        }
                      >

                        Reject

                      </button>

                      <button
                        className='delete-btn'
                        onClick={()=>
                          handleDelete(index)
                        }
                      >

                        Delete

                      </button>

                    </div>

                  </div>

                ))

              }

            </div>

          )

        }

      </div>

    </div>

  );
}

export default Admin;