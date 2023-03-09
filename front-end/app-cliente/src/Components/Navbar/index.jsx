import { Outlet, Link } from "react-router-dom";
import './navbar.scss';

const Navbar = () => {
    return (
        <>
            <div className="section">
                <nav className="nav-bar">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                    </ul>
                </nav>
                
            </div>
        </> 
    )
}

export default Navbar