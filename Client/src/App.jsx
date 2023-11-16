import { Routes, Route } from 'react-router-dom';


import Home from "./components/home/Home"
import Footer from './components/footer/Footer.jsx';
import Header from './components/header/Header.jsx';
import HotelList from './components/hotel-list/HomeList.jsx';
// import ControlledCarousel from './components/carosel/carocel.jsx';



function App() { 

  return (
    <>
       <Header />
        {/* <ControlledCarousel /> */}

       <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/hotels" element={<HotelList />} />
        </Routes>

        <Footer />
    </>
  )
}

export default App
