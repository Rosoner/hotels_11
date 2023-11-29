// import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// import * as authService from './services/authService';
import { AuthProvider } from './contexts/authContext';
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
import HotelEdit from './components/hotel-edit/HotelEdit';
import MyAccount from "./components/info-user/MyAccount";
import NotFound from './components/notFound/NotFound';
import AuthGuard from './components/guards/AuthGuard.jsx';


// import ControlledCarousel from './components/carosel/carocel.jsx';
function App() { 

// const navigate = useNavigate();
//     const [auth, setAuth] = useState(() => {
//         localStorage.removeItem('accessToken');
//         // in case of browse refresh token will be deleted from react, but is still keep it in localStorage
//         // due to reset in localStorage with removeItem

//         return {};
//     });
    // Store authority data.. console.log(result)
        // accessToken:"16a52761a9d32c61e8b166a0738520017872a536be786d618dd28dff4ad2fd4d"
        // email: "ivan@abv.bg"
        // password: "123"
        // _createdOn: 1700636778289
        // _id: "8606ea79-d5a4-4326-b731-1566d43e85b3"


  return (
    <AuthProvider>
        <div id="box">
            <Header />

            <Routes>
                <Route path={Path.Home} element={<Home />} />
                <Route path={Path.Hotels} element={<HotelList />} />                
                <Route path={Path.Login} element={<Login />} />
                <Route path={Path.Register} element={<Register />} />
                <Route path={Path.HotelDetails} element={<HotelDetails />} />              
                <Route path={Path.Page404} element={<NotFound />} />

                <Route element={<AuthGuard />}>
                  <Route path={Path.Create} element={<HotelCreate />} />
                  <Route path={Path.HotelEdit} element={<HotelEdit />} />
                  <Route path={Path.MyAccount} element={<MyAccount />} />
                  <Route path={Path.Logout} element={<Logout />} />
                </Route>

            </Routes>
        </div>
        <Footer />
    </AuthProvider >
)
}

export default App
