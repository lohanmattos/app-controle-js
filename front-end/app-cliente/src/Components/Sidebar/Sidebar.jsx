import { Link } from "react-router-dom";
import Home from "../../Pages/Home";
import Dashboard from "../../Pages/Dashboard";
import './sidebar.scss';

const Sidebar = () => {
    return (
        <>
            <div className="sidebar">
                <h1>Menu</h1>
                <ul>
                    <li><Link to='/'>Pagina inicial</Link></li>
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                </ul>
            </div>
        </>
    )

}

export default Sidebar