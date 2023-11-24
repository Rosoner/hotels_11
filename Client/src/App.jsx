import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import * as authService from './services/authService';
import AuthContext from './contexts/authContext';
import Path from './paths';

import Home from "./components/home/Home"
import Footer from './components/footer/Footer.jsx';
import Header from './components/header/Header';
import HotelList from './components/hotel-list/HomeList';
import HotelDetails from './components/hotel-details/HotelDetails';
import HotelCreate from './components/hotel-create/HotelCreate';
import Login from './components/login/Login';
import Logout from './components/logout/Logout';
import Register from './components/register/Register';

// import ControlledCarousel from './components/carosel/carocel.jsx';
function App() { 

const navigate = useNavigate();
    const [auth, setAuth] = useState(() => {
        localStorage.removeItem('accessToken');
        // in case of browse refresh token will be deleted from react, but is still keep it in localStorage
        // due to reset in localStorage with removeItem

        return {};
    });
    // Store authority data.. console.log(result)
        // accessToken:"16a52761a9d32c61e8b166a0738520017872a536be786d618dd28dff4ad2fd4d"
        // email: "ivan@abv.bg"
        // password: "123"
        // _createdOn: 1700636778289
        // _id: "8606ea79-d5a4-4326-b731-1566d43e85b3"


    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password);

        setAuth(result);

        localStorage.setItem('accessToken', result.accessToken);

        navigate(Path.Home);

        console.log(result);
    };

    const registerSubmitHandler = async (values) => {
        const result = await authService.register( values.username, values.email, values.password);

        setAuth(result);

        localStorage.setItem('accessToken', result.accessToken);

        navigate(Path.Home);
    };

    const logoutHandler = () => {
        setAuth({});

        localStorage.removeItem('accessToken');
        
    };

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        username: auth.username || auth.email,
        email: auth.email,
        isAuthenticated: !!auth.accessToken,
    };




  // return (
  //   <>
  //      <Header />
  //       {/* <ControlledCarousel /> */}

  //      <Routes>
  //               <Route path="/" element={<Home />} />
  //               <Route path="/hotels" element={<HotelList />} />
  //               <Route path="/hotels/:hotelId" element={<HotelDetails /> } />
  //               <Route path="/hotels/create" element={<HotelCreate />} />
  //               <Route path="/login" element={<Login />} />
  //       </Routes>

  //       <Footer />
  //   </>
  // )

  return (
    <AuthContext.Provider value={values}>
        <div id="box">
            <Header />

            <Routes>
                <Route path={Path.Home} element={<Home />} />
                <Route path={Path.Hotels} element={<HotelList />} />
                <Route path="/hotels/create" element={<HotelCreate />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/hotels/:hotelId" element={<HotelDetails />} />
                <Route path={Path.Logout} element={<Logout />} />
            </Routes>
        </div>
        <Footer />
    </AuthContext.Provider>
)
}

export default App
