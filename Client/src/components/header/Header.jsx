import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/authContext';

export default function Header() {
    const {
        isAuthenticated,
        username,
    } = useContext(AuthContext);

    return (
        <header>
            <h1><Link className="home" to="/">Best Hotels</Link></h1>
            <nav>
                <Link to="/hotels">Catalog</Link>
                {isAuthenticated && (
                    <div id="user">
                        <Link to="/hotels/create">New hotel</Link>
                        <Link to="/logout">Logout</Link>
                        <span style={{ color: 'yellow'}}>| {username} |</span>
                    </div>
                )}

                {!isAuthenticated && (
                    <div id="guest">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>
                )}
            </nav>
        </header>
    );
}

    // <div className="section-site-header">
    //         <div className="container">
    //             {/* <p className="site-title">Fitness Site</p> */}
    //             <h1><Link className="home" to="/">Best Hotels</Link></h1>

    //             <nav className="main-nav">
    //                 <ul>
    //                     <Link to="/hotels">Catalog</Link>
    //                     <Link to="/hotels/create">New hotel</Link>
    //                     <Link to="/logout">Logout</Link>
    //                     <Link to="/login">Login</Link>
    //                     <Link to="/register">Register</Link>
                       
    //                 </ul>
    //             </nav>
    //         </div>
    //     </div>