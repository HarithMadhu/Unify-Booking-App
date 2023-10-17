import React from 'react'
import '../featured/featured.scss'
import { RiArrowRightLine} from 'react-icons/ri';

function Featured() {
  return (
    <div className='featured'>
        <div>
            <a href="" className="featured-item item-1">
                <div className='text-container'>
                    <h3>Ready? Then let's roll</h3>
                    <div style={{display:"flex" , alignItems:"center", gap:"8px"}}>Ride with <RiArrowRightLine className='menu-item-icon' /></div>
                </div>
                <div className='img-container'>

                </div>
            </a>
        </div>
        <div>
            <a href="" className="featured-item item-2">
                <div className='text-container'>
                    <h3>Ready to Satisfy Your Cravings? </h3>
                    <div style={{display:"flex" , alignItems:"center", gap:"8px"}}>Dine with<RiArrowRightLine className='menu-item-icon' /></div>
                </div>
                <div className='img-container'>

                </div>
            </a>
        </div>
        <div>
            <a href="" className="featured-item item-3">
                <div className='text-container'>
                    <h3>Ready to Dive into Luxury?</h3>
                    <div style={{display:"flex" , alignItems:"center", gap:"8px"}}>Getaway Begins<RiArrowRightLine className='menu-item-icon' /></div>
                </div>
                <div className='img-container'>

                </div>
            </a>
        </div>
    </div>
  )
}

export default Featured