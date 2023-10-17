import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Guestpicker from '../../components/guestpicker/Guestpicker'
import { RiCalendarLine } from 'react-icons/ri';
import { RiAwardLine } from 'react-icons/ri';
import "../restaurant/restaurant.scss"


export const Restaurant = () => {
  return (
    <div className='d-flex flex-column'>
      <Navbar></Navbar>
      <div className='hotel-container d-flex w-100'>
        <div className="hotel-wrapper w-100">
          <h1 className="hotel-title">NOMAD Café</h1>
          <div className="hotel-address mb-3">
          NOMAD Café, 640 Matara Rd, Weligama 81700
          </div>
          <div className="image-container d-grid mb-3">
            <div className="main-image img-st"></div>
            <div className="sub-images d-grid">
              <div className="sub-img-1 img-ht"></div>
              <div className="sub-img-2 img-ht"></div>
              <div className="sub-img-3 img-ht"></div>
              <div className="sub-img-4 img-ht"></div>
            </div>
          </div>
          <div className="h-booking">
            <div className="h-detais d-flex flex-column gap-2">
              <div className='border-bottom pb-2'>
                <h3>NOMAD Café hosted by Kamal</h3>
                <span>International, Vegetarian Friendly, Vegan Options</span>
              </div>
              <div className='border-bottom pb-2 d-flex flex-column gap-2'>
                <div className='d-flex gap-3'>
                  <RiCalendarLine  style={{ fontSize: "20px" }}></RiCalendarLine>
                  <div className='d-flex flex-column gap-0'>
                    <span>Free cancellation before 12:00 PM on Oct 17.</span>
                  </div>
                </div>
                <div className='d-flex gap-3'>
                  <RiAwardLine style={{ fontSize: "20px" }}></RiAwardLine>
                  <div className='d-flex flex-column gap-0'>
                    <div><b>Dedicated workspace</b></div>
                    <span>A common area with wifi that’s well-suited for working.</span>
                  </div>
                </div>
              </div>
              <div className='pb-2'>
                <p>We are passionate about food and, prticularly, about food that makes you feel good both when you are having it and afterwards. We try to use as many organic products as we can and we always buy local, except for some superfoods and other ingredients that need to import from other countries.
                  We cater for vegans, vegetarians and gluten free diets.</p>
              </div>
            </div>
            <div className="booking-detais d-flex flex-column gap-3">
              <div className="form-item">
                <span>Name</span>
                <input type="text" className='form-item-input' placeholder='Your Name' />
              </div>
              <div className="form-item">
                <span>Email</span>
                <input type="email" className='form-item-input' placeholder='Your Email' />
              </div>
              <div className="form-item">
                <span>Date</span>
                <input type="date" className='form-item-input'/>
              </div>
              <div className="form-item">
                <span>Time</span>
                <input type="time" className='form-item-input' />
              </div>
              <Guestpicker></Guestpicker>
              <div className='change-title'>
                <span>You won't be charged yet</span>
              </div>
              <button className='primary-btn'>Reserve</button>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Restaurant