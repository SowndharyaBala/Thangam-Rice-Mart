
import React from 'react';
import './Home.css';
//import RiceItem from '../RiceItem/RiceItem';
 import RiceList from '../RiceList/RiceList';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='font-bold py-3 text-4xl'>Thangam Rice Shop</h1>
        <p className='py-4'>Welcome to our shop! We offer a variety of rice for all your needs.</p>
      </header>
      {/* <RiceItem/> */}
      <RiceList/> 
    </div>
  );
}

export default Home;
