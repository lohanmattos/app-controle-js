import { Link, Outlet } from 'react-router-dom';
import './navbar.scss';

const BarraSuperior = () => {
    return (
      <>
            <div className="section">
                <nav className="nav-bar">
                  <h2>Menu</h2>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/produtos">Produtos</Link>
                        </li>
                        <li>
                            <Link to="/configuracao">Configuracões</Link>
                        </li>
                    </ul>
                </nav>
                
            </div>
            <Outlet/>
        </> 
    )
}

export default BarraSuperior