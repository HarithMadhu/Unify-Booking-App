import React from 'react'
import '../header/header.scss'
import { RiSearchLine} from 'react-icons/ri';

function header() {
  return (
    <div className='header'>
      <div className='header-container'>
          <h2 className='header-main-title'>
              Find your next stay
          </h2>
          <div className='header-sub-title'>
            Search low prices on hotels, restaurants and much more...
          </div>
      </div>
      <div className='header-search-container'>
        <div className="header-search">
            <RiSearchLine className='menu-item-icon' />
            <input type="text" placeholder='Restaurants, hotels, taxi, etc' className='header-search-input' />
        </div>
      </div>
    </div>
  )
}

export default header