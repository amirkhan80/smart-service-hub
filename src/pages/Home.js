import React from 'react';
import { Link } from 'react-router-dom';

function Home() {

  const isLogin =
  localStorage.getItem('smartUser');

  return (

    <div className='home-page'>

      {/* HERO SECTION */}

      <section className='hero-section'>

        <div className='hero-overlay'>

          <h1>
            Smart Service Hub
          </h1>

          <p>
            Book reliable car or bike services in seconds —
            choose your service type and time,
            and we'll handle the rest 🚗🛠️
          </p>

          <div className='hero-buttons'>

            {

              isLogin ? (

                <Link to='/booking'>

                  <button className='book-btn'>

                    Book Service

                  </button>

                </Link>

              ) : (

                <Link to='/register'>

                  <button className='register-btn'>

                    Get Started

                  </button>

                </Link>

              )

            }
            <Link to='/myvehicles'>

  <button className='vehicle-btn'>

    My Vehicles

  </button>

</Link>
          </div>

        </div>

      </section>

      {/* FEATURES */}

      <section className='features-section'>

        <div className='feature-card'>

          <h2>
            ⚡ Quick Booking
          </h2>

          <p>
            Book your service in under a minute.
          </p>

        </div>

        <div className='feature-card'>

          <h2>
            🧑‍🔧 Trusted Mechanics
          </h2>

          <p>
            Certified and experienced professionals.
          </p>

        </div>

        <div className='feature-card'>

          <h2>
            💰 Transparent Pricing
          </h2>

          <p>
            Know the cost before you book.
          </p>

        </div>

      </section>

      {/* SERVICES */}

      <section className='services-section'>

        <h1 className='service-title'>
          Our Services
        </h1>

        <div className='services-grid'>

          {/* CAR WASH */}

          <div className='service-box'>

            <img
              src='https://cdn-icons-png.flaticon.com/512/2972/2972185.png'
              alt='wash'
            />

            <h3>
              Car Wash
            </h3>

            <p>
              Premium foam wash and cleaning service.
            </p>

            <Link to='/booking'>

              <button>
                Book Now
              </button>

            </Link>

          </div>

          {/* OIL CHANGE */}

          <div className='service-box'>

            <img
              src='https://cdn-icons-png.flaticon.com/512/1048/1048315.png'
              alt='oil'
            />

            <h3>
              Oil Change
            </h3>

            <p>
              High-quality engine oil replacement.
            </p>

            <Link to='/booking'>

              <button>
                Book Now
              </button>

            </Link>

          </div>

          {/* ENGINE */}

          <div className='service-box'>

            <img
              src='https://cdn-icons-png.flaticon.com/512/1995/1995470.png'
              alt='repair'
            />

            <h3>
              Engine Repair
            </h3>

            <p>
              Complete engine diagnosis and repair.
            </p>

            <Link to='/booking'>

              <button>
                Book Now
              </button>

            </Link>

          </div>

        </div>

      </section>

      {/* WHY US */}

      <section className='why-us'>

        <div className='why-left'>

          <h1>
            Why Choose Smart Service Hub?
          </h1>

          <p>

            We provide modern vehicle servicing with
            trusted mechanics, real-time booking,
            secure payment, and fast customer support.

          </p>

          <ul>

            <li>✔ Professional Team</li>

            <li>✔ Fast Service</li>

            <li>✔ Affordable Pricing</li>

            <li>✔ Easy Booking</li>

            <li>✔ 24/7 Support</li>

          </ul>

        </div>

        <div className='why-right'>

          <img
            src='https://cdn-icons-png.flaticon.com/512/3202/3202926.png'
            alt='service'
          />

        </div>

      </section>

    </div>

  );
}

export default Home;