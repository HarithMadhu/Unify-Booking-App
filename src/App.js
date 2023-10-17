import React from 'react';
import "./assets/styles/global.scss"
import { BrowserRouter,
Routes,
Route,
} from 'react-router-dom';
import { Home } from './pages/home/Home';
import { List } from './pages/list/List';
import { Hotel } from './pages/hotel/Hotel';
import {Restaurant} from './pages/restaurant/Restaurant';
import {RestaurantList} from './pages/restaurant-list/RestaurantList'
import {Ride } from './pages/ride/Ride';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/hotels" element={<List/>}></Route>
            <Route path="/hotels/:id" element={<Hotel/>}></Route>
            <Route path="/restaurants" element={<RestaurantList/>}></Route>
            <Route path="/restaurants/:id" element={<Restaurant/>}></Route>
            <Route path="/ride" element={<Ride/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
