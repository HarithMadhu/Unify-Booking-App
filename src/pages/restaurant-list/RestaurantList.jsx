import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import "../restaurant-list/restaurant-list.scss"

export const RestaurantList = () => {
    return (
        <div className='main-container' style={{ display: "flex", flexDirection: "column" }}>
            <Navbar></Navbar>
            <div className="list-container">
                <div className="list-wrapper">
                    <div className="list-search gap-2 d-flex flex-column">
                        <h1>Search</h1>
                        <div className="form-item">
                            <input type="text" placeholder='Destination' className='form-item-input' />
                        </div>
                        <div className="form-item">
                            <input type="date" className='form-item-input' />
                        </div>
                        <div className='w-100'>
                            <button className='primary-btn'>
                                Search
                            </button>
                        </div>
                    </div>
                    <div className="items-list">
                        <div className="et-card">
                            <Link to="/restaurants/:id">
                                <div className="p-list-item-img-1 img-bg"></div>
                                <div className="p-list-titles">
                                    <h1>
                                        Nomad Cafe
                                    </h1>
                                    <span>Waligama</span>
                                    <div className='meals-items'>
                                        <span>Breakfast</span>
                                        <span>|</span>
                                        <span>Lunch</span>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="et-card">
                            <Link to="/hotels/:id">
                                <div className="p-list-item-img-2 img-bg"></div>
                                <div className="p-list-titles">
                                    <h1>
                                        Hideout
                                    </h1>
                                    <span>Unawatuna</span>
                                    <div className='meals-items'>
                                        <span>Breakfast</span>
                                        <span>|</span>
                                        <span>Lunch</span>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="et-card">
                            <Link to="/hotels/:id">
                                <div className="p-list-item-img-3 img-bg"></div>
                                <div className="p-list-titles">
                                    <h1>
                                        La Luna
                                    </h1>
                                    <span>Colombo</span>
                                    <div className='meals-items'>
                                        <span>Breakfast</span>
                                        <span>|</span>
                                        <span>Lunch</span>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="et-card">
                            <Link to="/hotels/:id">
                                <div className="p-list-item-img-4 img-bg"></div>
                                <div className="p-list-titles">
                                    <h1>
                                        Villaroy
                                    </h1>
                                    <span>Hiriketiya</span>
                                    <div className='meals-items'>
                                        <span>Breakfast</span>
                                        <span>|</span>
                                        <span>Lunch</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default RestaurantList