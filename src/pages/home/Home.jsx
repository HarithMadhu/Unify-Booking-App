import React from 'react';
import "./home.scss";
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header'
import Featured from '../../components/featured/Featured';
import PropertyList from '../../components/propertyList/PropertyList';
import Footer from '../../components/footer/Footer';

export const Home = () => {
  return (
    <div style={{overflowY:"auto"}}>
        <Navbar></Navbar>
        <Header></Header>
        <div className='home-container'>
            <Featured></Featured>
            <PropertyList></PropertyList>
        </div>
        <Footer></Footer>
    </div>
  )
}