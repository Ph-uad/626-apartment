import React from 'react';
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import Apartment from '../apartment/Apartment';
import HotDeals from '../Hotdeals/HotDeals';
import Properties from '../Properties/Properties';
import Footer from '../Footer/Footer';

function App() {

  return (
    <div className="App">
     
      <Header></Header>
      <Nav></Nav>
      <main className="fluid-container" id='apartment'>
             <Apartment></Apartment>
             <HotDeals/>
             <Properties/>
      </main>
 
    
      <Footer></Footer>
    </div>
  );
}

export default App;
