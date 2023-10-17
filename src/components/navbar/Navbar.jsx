import React from 'react'
import "../navbar/navbar.scss"
import { RiHotelBedFill } from 'react-icons/ri';
import { RiRestaurantFill } from 'react-icons/ri';
import { RiTaxiFill } from 'react-icons/ri';
import { RiUserFill} from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
      <div className='navbar-container'>
          <div className='navbar'>
              <ul className='navbar-menu'>
                  <li className='logo'>
                      <Link to="/">Unify</Link>
                  </li>
                  <li className='menu-item'>
                      <NavLink to="/Hotels" activeClassName="active">
                            <RiHotelBedFill className='menu-item-icon' />Stays
                      </NavLink>
                  </li>
                  <li className='menu-item'>
                        <NavLink to="/Restaurants" activeClassName="active"><RiRestaurantFill className='menu-item-icon' />Eat</NavLink>
                  </li>
                  <li className='menu-item'>
                        <NavLink to="/Ride" activeClassName="active"><RiTaxiFill className='menu-item-icon' />Ride</NavLink>
                  </li>
              </ul>
              <button className='icon-btn'><RiUserFill className='menu-item-icon' /></button>
          </div>
      </div>
    )
}

export default Navbar