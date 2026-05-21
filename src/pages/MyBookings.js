import React, {
  useEffect,
  useState
} from 'react';

function MyBookings() {

  const [bookings,setBookings] =
  useState([]);

  useEffect(()=>{

    const savedBookings =
    JSON.parse(
      localStorage.getItem(
        'bookings'
      )
    ) || [];

    setBookings(savedBookings);

  },[]);

  return (

    <div className='my-booking-page'>

      <div className='booking-overlay'>

        <h1 className='booking-title'>

          My Booking History 🚗

        </h1>

        {

          bookings.length === 0 ? (

            <div className='empty-booking'>

              <h2>
                No Booking Found 😔
              </h2>

              <p>
                Your booked services
                will appear here.
              </p>

            </div>

          ) : (

            <div className='booking-grid'>

              {

                bookings.map(

                  (item,index)=>(

                  <div
                    className='booking-card'
                    key={index}
                  >

                    {/* TOP */}

                    <div className='booking-top'>

                      <h2>
                        {item.vehicleName}
                      </h2>

                      <span>

                        ₹
                        {item.servicePrice}

                      </span>

                    </div>

                    {/* INFO */}

                    <div className='booking-info'>

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

                        📅 Date :
                        <strong>
                          {item.bookingDate}
                        </strong>

                      </p>

                      {/* STATUS */}

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

export default MyBookings;