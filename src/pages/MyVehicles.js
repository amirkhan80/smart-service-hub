import React, { useEffect, useState } from 'react';

function MyVehicles() {

  const [vehicles, setVehicles] =
  useState([]);

  const [vehicleData, setVehicleData] =
  useState({

    type:'',
    model:'',
    number:'',
    image:''

  });

  useEffect(() => {

    const savedVehicles =
    JSON.parse(
      localStorage.getItem('vehicles')
    ) || [];

    setVehicles(savedVehicles);

  }, []);

  const handleChange = (e) => {

    setVehicleData({

      ...vehicleData,

      [e.target.name]:
      e.target.value

    });

  };

  const handleImage = (e) => {

    const file =
    e.target.files[0];

    if(file){

      const reader =
      new FileReader();

      reader.onloadend = () => {

        setVehicleData({

          ...vehicleData,

          image:reader.result

        });

      };

      reader.readAsDataURL(file);

    }

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    const updatedVehicles = [

      ...vehicles,
      vehicleData

    ];

    setVehicles(updatedVehicles);

    localStorage.setItem(
      'vehicles',
      JSON.stringify(updatedVehicles)
    );

    alert(
      'Vehicle Added Successfully 🚗'
    );

    setVehicleData({

      type:'',
      model:'',
      number:'',
      image:''

    });

  };

  return (

    <div className='vehicle-page'>

      <div className='vehicle-container'>

        {/* LEFT */}

        <div className='vehicle-left'>

          <h1>
            My Vehicles 🚘
          </h1>

          <p>

            Add and manage all your
            personal vehicles with
            modern dashboard experience.

          </p>

          <img
            src='https://cdn-icons-png.flaticon.com/512/744/744465.png'
            alt='vehicle'
          />

        </div>

        {/* RIGHT */}

        <div className='vehicle-right'>

          <h1>
            Add Vehicle
          </h1>

          <form onSubmit={handleSubmit}>

            <input
              type='text'
              name='type'
              placeholder='Vehicle Type'
              value={vehicleData.type}
              onChange={handleChange}
              required
            />

            <input
              type='text'
              name='model'
              placeholder='Vehicle Model'
              value={vehicleData.model}
              onChange={handleChange}
              required
            />

            <input
              type='text'
              name='number'
              placeholder='Registration Number'
              value={vehicleData.number}
              onChange={handleChange}
              required
            />

            <input
              type='file'
              accept='image/*'
              onChange={handleImage}
            />

            <button type='submit'>

              Save Vehicle

            </button>

          </form>

        </div>

      </div>

      {/* VEHICLE LIST */}

      <div className='vehicle-list-section'>

        <h1>
          Saved Vehicles
        </h1>

        <div className='vehicle-grid'>

          {

            vehicles.map((vehicle,index)=>(

              <div
                className='vehicle-card'
                key={index}
              >

                {

                  vehicle.image && (

                    <img
                      src={vehicle.image}
                      alt='vehicle'
                    />

                  )

                }

                <h2>
                  {vehicle.model}
                </h2>

                <p>
                  Type :
                  {vehicle.type}
                </p>

                <p>
                  Number :
                  {vehicle.number}
                </p>

              </div>

            ))

          }

        </div>

      </div>

    </div>

  );
}

export default MyVehicles;