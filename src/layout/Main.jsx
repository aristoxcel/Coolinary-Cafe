

import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useEffect } from 'react';


const Main = () => {
      // dynamic title
      const loc= useLocation();
      useEffect(()=>{
        if (loc.pathname==='/') {
          document.title= 'Coolinary | Home'
        }
        else {
          document.title = `Coolinary ${loc.pathname.replace('/', '| ')}`
        }
        if (loc.pathname==='/allFoods') {
          document.title= 'Craftopia | All Foods'
        }
        if (loc.state) {
          document.title= `Coolinary || ${loc.state}`;
        }
      },[loc.pathname, loc.state]);
  return (
    <div>
      <Navbar />
      <div className='min-h-[calc(100vh-306px)]'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Main
