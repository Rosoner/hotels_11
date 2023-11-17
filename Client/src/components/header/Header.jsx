import { Link } from 'react-router-dom';

export default function Header() {
    return (
        // <header>
        //     <h1><Link className="home" to="/">Best Hotels</Link></h1>
        //     <nav>
        //         <Link to="/hotels">Catalog</Link>
        //         <div id="user">
        //             <Link to="/hotels/create">New hotel</Link>
        //             <Link to="/logout">Logout</Link>
        //         </div>
        //         <div id="guest">
        //             <Link to="/login">Login</Link>
        //             <Link to="/register">Register</Link>
        //         </div>
        //     </nav>
        // </header>


        <div className="section-site-header">
            <div className="container">
                {/* <p className="site-title">Fitness Site</p> */}
                <h1><Link className="home" to="/">Best Hotels</Link></h1>

                <nav className="main-nav">
                    <ul>
                        <Link to="/hotels">Catalog</Link>
                        <Link to="/hotels/create">New hotel</Link>
                        <Link to="/logout">Logout</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                        {/* <div id="user">
                            
                        </div> */}
                        {/* <div id="guest">
                            
                        </div> */}
                    </ul>
                </nav>
            </div>
        </div>


    );
}
