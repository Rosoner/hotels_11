import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <h1><Link className="home" to="/">Best Hotels</Link></h1>
            <nav>
                <Link to="/games">Catalog</Link>
                <div id="user">
                    <Link to="/games/create">New hotel</Link>
                    <Link to="/logout">Logout</Link>
                </div>
                <div id="guest">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            </nav>
        </header>
    );
}
