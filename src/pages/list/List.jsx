import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import "../list/list.scss"
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';

export const List = () => {
  return (
    <div className='main-container' style={{display:"flex", flexDirection:"column"}}>
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
            <div className="st-card">
              <Link to="/hotels/:id">
                <div className="p-list-item-img-1 img-bg"></div>
                <div className="p-list-titles">
                      <h1>
                        Hotel de Glace
                      </h1>
                      <span>452 kilometers away</span>
                      <span>Oct 15 -20</span>
                      <span><b>$411</b>night</span>
                  </div>
              </Link>
            </div>

            <div className="st-card">
              <Link to="/hotels/:id">
                <div className="p-list-item-img-2 img-bg"></div>
                <div className="p-list-titles">
                      <h1>
                      Jules' Undersea Lodge
                      </h1>
                      <span>45 kilometers away</span>
                      <span>Oct 15 -20</span>
                      <span><b>$4100</b>night</span>
                  </div>
              </Link>
            </div>

            <div className="st-card">
              <Link to="/hotels/:id">
                <div className="p-list-item-img-3 img-bg"></div>
                <div className="p-list-titles">
                      <h1>
                      Cave Hotels
                      </h1>
                      <span>412 kilometers away</span>
                      <span>Oct 15 -20</span>
                      <span><b>$3333</b>night</span>
                  </div>
              </Link>
            </div>

            <div className="st-card">
              <Link to="/hotels/:id">
                <div className="p-list-item-img-4 img-bg"></div>
                <div className="p-list-titles">
                      <h1>
                      Amangiri 
                      </h1>
                      <span>4 kilometers away</span>
                      <span>Oct 15 -20</span>
                      <span><b>$47</b>night</span>
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
