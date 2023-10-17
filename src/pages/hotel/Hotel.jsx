import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import "../hotel/hotel.scss"
import Guestpicker from '../../components/guestpicker/Guestpicker'
import { RiBookOpenLine } from 'react-icons/ri';
import { RiAwardLine } from 'react-icons/ri';


export const Hotel = () => {
  return (
    <div className='d-flex flex-column'>
      <Navbar></Navbar>
      <div className='hotel-container d-flex w-100'>
        <div className="hotel-wrapper w-100">
          <h1 className="hotel-title">Hotel de Glace</h1>
          <div className="hotel-address mb-3">
            Mudgee, New South Wales, Australia
          </div>
          <div className="image-container d-grid mb-3">
            <div className="main-image img-ht"></div>
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
                <h3>Hotel de Glace hosted by Rick And Steph</h3>
                <span>2 guests | 1 bedroom | 1 bed | 1 bath</span>
              </div>
              <div className='border-bottom pb-2 d-flex flex-column gap-2'>
                <div className='d-flex gap-3'>
                  <RiBookOpenLine style={{ fontSize: "20px" }}></RiBookOpenLine >
                  <div className='d-flex flex-column gap-0'>
                    <div><b>Featured in</b></div>
                    <span>ArchDaily, November 2021</span>
                    <span>Designboom, August 2021</span>
                  </div>
                </div>
                <div className='d-flex gap-3'>
                  <RiAwardLine style={{ fontSize: "20px" }}></RiAwardLine>
                  <div className='d-flex flex-column gap-0'>
                    <div><b>Awards won</b></div>
                    <span>ArchDaily, November 2021</span>
                    <span>Australian Institute of Architects, Small Project, 2021</span>
                  </div>
                </div>
              </div>
              <div className='pb-2'>
                 <p>Hotel de Glace is a luxurious, architect designed, off grid Eco hut just for couples--the newest of Wilgowrah's unique country escapes--Wilgowrah Church and Tom's Cottage. Built to capture stunning views it provides guests with peace, privacy and a sense of isolation. Inclusions - King bed, full bath, shower, flushing toilet, kitchenette, WiFi, air-conditioning (with some limitations) and Fire Pit (closed during summer Bush Fire Season). Wilgowrah is a historic and picturesque rural property.</p>
              </div>
            </div>
            <div className="booking-detais d-flex flex-column gap-3">
              <div className='pricing-title-container'>
                <div className='pricing-title'>$315</div>
                <span className='pricing-sub-title'>night</span>
              </div>
              <div className="form-item">
                <span>Check in</span>
                <input type="date" className='form-item-input' placeholder='harith' />
              </div>
              <div className="form-item">
                <span>Check out</span>
                <input type="date" className='form-item-input' />
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
