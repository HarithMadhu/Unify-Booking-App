import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Guestpicker from '../../components/guestpicker/Guestpicker'
import { RiCalendarLine } from 'react-icons/ri';
import { RiAwardLine } from 'react-icons/ri';
import { RiCarLine } from 'react-icons/ri';
import { RiEBike2Line } from 'react-icons/ri';
import { RiBusLine } from 'react-icons/ri';
import { RiTruckLine } from 'react-icons/ri';
import "../ride/ride.scss"


export const Ride = () => {
    return (
        <div className='d-flex flex-column'>
            <Navbar></Navbar>
            <div className='ride-container'>
                <div className='w-100 d-flex flex-column' style={{justifyContent:'center', height:'100%'}}>
                    <div className="card">
                        <div className="booking-detais d-flex flex-column gap-3">
                            <div className='title'>
                            Request a ride now
                            </div>
                            <div className="form-item">
                                <input type="text" className='form-item-input' placeholder='Your Name' />
                            </div>
                            <div className="form-item">
                                <input type="text" className='form-item-input' placeholder='Enter pickup location' />
                            </div>
                            <div className="form-item">
                                <input type="text" className='form-item-input' placeholder='Enter destination' />
                            </div>
                            <div className="form-item">
                                <input type="time" className='form-item-input' placeholder='Time' />
                            </div>
                            <div className='select-vehicle'>
                                <div className='mb-2'>Select your vehicle</div>
                                <div className='d-flex gap-3'>
                                    <div className='d-flex'>
                                        <RiEBike2Line className='icon'></RiEBike2Line>
                                        <input type="radio" name="Car" id="" />
                                    </div>
                                    <div className='d-flex'>
                                        <RiCarLine className='icon'></RiCarLine>
                                        <input type="radio" name="Car" id="" />
                                    </div>
                                    <div className='d-flex'>
                                        <RiBusLine className='icon'></RiBusLine>
                                        <input type="radio" name="Car" id="" />
                                    </div>
                                    <div className='d-flex'>
                                        <RiTruckLine className='icon'></RiTruckLine>
                                        <input type="radio" name="Car" id="" />
                                    </div>
                                </div>
                            </div>
                            <button className='primary-btn'>Request now</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Ride