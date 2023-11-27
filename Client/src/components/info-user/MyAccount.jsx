// import { useState, useEffect, useContext } from "react";
// import { useParams, useNavigate, Link } from 'react-router-dom';
// import AuthContext from '../../contexts/authContext';
// import * as authService from "../../services/authService"
// import styles from './MyAccount.module.css'


// export default function MyAccount() {
//     const [user, setUser] = useState({});
//     const { id } = useParams();
//     const navigate = useNavigate();
//     const {
//         isAuthenticated,
//         username,
//         email,
//         userId,
//         // userImage,
//     } = useContext(AuthContext);


//     useEffect(() => {
//         authService.getCurrentUser(userId)
//             .then(result => setUser(result))
//             .catch((err) => {
//                 navigate('/');
//             });
//     }, [id]);

//     return (
//         <>
//             {isAuthenticated && (
//                 <div className="bg-2 section" id="contact">
//                     <div
//                         className={`inner ${styles.userAccountDetailsBackground}`}
//                         data-topspace={50}
//                         data-bottomspace={20}
//                         data-image="./src/assets/flavours/bigsmokebbq/images/content/background-6.jpg"
//                     >
//                         <div className="container">
//                             <h3 className="hdr4">My Account</h3>
//                             <div className="easyBox full">
//                                 <h4 className="hdr5">
//                                     <span>Username: {username}</span>
//                                 </h4>
//                                 <h4 className="hdr5">
//                                     <span>Email: {email}</span>
//                                 </h4>
//                                 {/* <h4 className="hdr5">
//                                     <span>Image: {userImage}</span>
//                                 </h4> */}
//                                 <p className="bigger">
//                                     <Link to={`/myaccount/edit`}><button id="action-save" className={`btn ${styles.editBtn}`} type="submit">Edit</button></Link>
//                                 </p>
//                                 <p className="bigger">
//                                     <button id="action-save" className={`btn ${styles.delBtn}`} type="submit">Delete</button>

//                                 </p>

//                             </div>
//                             {/* / easyBox */}
//                         </div>
//                     </div>
//                 </div>
//             )}
//             {!isAuthenticated && (
//                 <div className="bg-2 section" id="contact">

//                     <div
//                         className={`inner ${styles.myAccountBackground}`}
//                         data-topspace={50}
//                         data-bottomspace={20}
//                         data-image="./src/assets/flavours/bigsmokebbq/images/content/background-6.jpg"
//                     >
//                         <div className="container">
//                             <h3 className="hdr4">My Account</h3>
//                             <div className="easyBox full">
//                                 <h4 className="hdr5">
//                                     <span>Do you have an account with us?</span>
//                                 </h4>
//                                 <div className="row nomargin">
//                                     <div className="col-md-5">
//                                         <h4 className="hdr2 special">Not registered yet? If you want to be up to date with us you can register here.</h4>
//                                         <input type="hidden" name="field_[]" defaultValue=" " />
//                                         <button type="submit" className="btn btn-default" ><Link to="/register">Register</Link></button>

//                                     </div>
//                                     <div className="col-md-2"></div>
//                                     <div className="col-md-5">
//                                         <h4 className="hdr2 special">Already have an account? Please login to proceed!</h4>


//                                         <button className="btn btn-default" type="button"><Link to="/login">Login</Link></button>

//                                     </div>
//                                 </div>
//                             </div>
//                             {/* / easyBox */}
//                         </div>
//                     </div>
//                 </div>
//             )}

//         </>
//     )
// }


import AuthContext from '../../contexts/authContext';
import {  useContext } from "react";


export default function MyAccount() {
    
        const {
            email,
            username,
            isAuthenticated,
            
        } = useContext(AuthContext);

    return (
        <section>
           
            <section>
                
                <div>
                    <div className="slogan">
                        <h2 style={{ color: 'yellow',}}>Account info!</h2>
                    </div>

                            {isAuthenticated && (
                            <div id="user">      
                                {/* <h2 style={{ color: 'yellow',}}>Account info!</h2>  */}
                                <br></br>  
                                <br></br>     
                                <span style={{ color: 'yellow',}}>You can create your own publication in this blog!
                                Evryone loged in user can write some comments bellow your post.</span> 
                                <br></br>  
                                <br></br>           
                                <span style={{ color: 'yellow',}}>User name: {username}</span>
                                <br></br>
                                <span style={{ color: 'yellow',}}>Email: {email}</span>
                                {/* <Link to="/myaccount">My account</Link> */}
                            </div>
                        )}

                </div>
                {/* <img src="../images/hotel_3.png" alt="hero" /> */}
            <div>
                
            </div>

            </section>

        </section>

    );
}
