import React from 'react'
import "../footer/footer.scss"

function Footer() {
  return (
    <div className='footer-container'>
        <div className='logo'>
            <a href="">Unify</a>
        </div>
        <div className='footer-details'>
            <div className='f-details-side'>
                <a href="">Get Help</a>
                <a href="">Add your restaurant</a>
                <a href="">Sign up to deliver</a>
                <a href="">Create a business account</a>
            </div>
            <div className='f-details-side'>
                <a href="">Restaurants near me</a>
                <a href="">View all cities</a>
                <a href="">View all countries</a>
                <a href="">Pickup near me</a>
            </div>
        </div>
    </div>
  )
}

export default Footer