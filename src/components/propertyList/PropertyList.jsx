import React from 'react'
import '../propertyList/propertylist.scss'

function PropertyList() {
    return (
        <div>
            <div className="home-title">
                Stay at our top unique properties
            </div>
            <div className='p-list'>
                <a href="http://">
                    <div className="p-list-item-img-1 img-bg">

                    </div>
                    <div className="p-list-titles">
                        <h1>
                            Kodaikanal, India
                        </h1>
                        <span>452 kilometers away</span>
                        <span>Oct 15 -20</span>
                        <span><b>$41</b>night</span>
                    </div>
                </a>
                <a href="http://">
                    <div className="p-list-item-img-2 img-bg"></div>
                    <div className="p-list-titles">
                        <h1>
                            Hemmathagama, Sri Lanka
                        </h1>
                        <span>77 kilometers away</span>
                        <span>Oct 16 -21</span>
                        <span><b>$456</b>night</span>
                    </div>
                </a>
                <a href="http://">
                    <div className="p-list-item-img-3 img-bg">

                    </div>
                    <div className="p-list-titles">
                        <h1>
                        Villa in Tangalle
                        </h1>
                        <span>23 kilometers away</span>
                        <span>Oct 21 -26</span>
                        <span><b>$31</b>night</span>
                    </div>
                </a>
                <a href="http://">
                    <div className="p-list-item-img-4 img-bg">

                    </div>
                    <div className="p-list-titles">
                        <h1>
                            Baa Atoll, Maldives
                        </h1>
                        <span>768 kilometers away</span>
                        <span>Oct 17 -22</span>
                        <span><b>$1123</b>night</span>
                    </div>
                </a>
            </div>

            <div className="home-title">
                Popular destinations
            </div>
            <div className='p-list'>
                <a href="http://">
                    <div className="p-list-item-img-5 img-bg">

                    </div>
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
                </a>
                <a href="http://">
                    <div className="p-list-item-img-6 img-bg"></div>
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
                </a>
                <a href="http://">
                    <div className="p-list-item-img-7 img-bg">

                    </div>
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
                </a>
                <a href="http://">
                    <div className="p-list-item-img-8 img-bg">

                    </div>
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
                </a>
            </div>

            <div className="home-title">
                Need a ride?
            </div>
            <div className='p-list vehicles'>
                <a href="http://">
                    <div className="p-list-item-img-9 img-bg">

                    </div>
                    <div className="p-list-titles">
                        <h1>
                            Moto
                        </h1>
                    </div>
                </a>
                <a href="http://">
                    <div className="p-list-item-img-10 img-bg"></div>
                    <div className="p-list-titles">
                        <h1>
                            Zip
                        </h1>
                    </div>
                </a>
                <a href="http://">
                    <div className="p-list-item-img-11 img-bg">

                    </div>
                    <div className="p-list-titles">
                        <h1>
                            Van
                        </h1>
                    </div>
                </a>
                <a href="http://">
                    <div className="p-list-item-img-12 img-bg">

                    </div>
                    <div className="p-list-titles">
                        <h1>
                            Lorry
                        </h1>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default PropertyList