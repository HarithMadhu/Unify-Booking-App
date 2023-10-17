// GuestPicker.js

import React, { useState } from 'react';
import "../guestpicker/guestpicker.scss"

function GuestPicker() {
  const [guests, setGuests] = useState({
    adults: 0,
    children: 0,
    infants: 0,
  });

  const handleGuestChange = (type, value) => {
    setGuests({
      ...guests,
      [type]: value,
    });
  };

  return (
    <div className='guest-picker-container'>
      <div className='guest-picker'>
        <div className="guest-picker-titles">
            <h3>Adults</h3>
            <span>Age 13+</span>
        </div>
        <div className='guest-picker-item'>
          <button onClick={() => handleGuestChange('adults', guests.adults - 1)}>-</button>
          {guests.adults}
          <button onClick={() => handleGuestChange('adults', guests.adults + 1)}>+</button>
        </div>
      </div>
      <div className='guest-picker'>
        <div className="guest-picker-titles">
            <h3>Children</h3>
            <span>Ages 2–12</span>
        </div>
        <div className='guest-picker-item'>
          <button onClick={() => handleGuestChange('children', guests.children - 1)}>-</button>
          {guests.children}
          <button onClick={() => handleGuestChange('children', guests.children + 1)}>+</button>
        </div>
      </div>
      <div className='guest-picker'>
        <div className="guest-picker-titles">
            <h3>Infants</h3>
            <span>Under 2</span>
        </div>
        <div className='guest-picker-item'>
          <button onClick={() => handleGuestChange('infants', guests.infants - 1)}>-</button>
          {guests.infants}
          <button onClick={() => handleGuestChange('infants', guests.infants + 1)}>+</button>
        </div>
      </div>
    </div>
  );
}

export default GuestPicker;
