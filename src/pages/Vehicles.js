import React, { useState } from 'react';

function Vehicles() {
  const [vehicle, setVehicle] = useState('');
  const [list, setList] = useState([]);

  const addVehicle = () => {
    setList([...list, vehicle]);
    setVehicle('');
  };

  return (
    <div className='container mt-5'>
      <h2>Vehicle Management</h2>

      <div className='d-flex mb-3'>
        <input
          type='text'
          className='form-control me-2'
          placeholder='Enter Vehicle Name'
          value={vehicle}
          onChange={(e) => setVehicle(e.target.value)}
        />

        <button className='btn btn-primary' onClick={addVehicle}>
          Add
        </button>
      </div>

      <ul className='list-group'>
        {list.map((item, index) => (
          <li key={index} className='list-group-item'>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Vehicles;