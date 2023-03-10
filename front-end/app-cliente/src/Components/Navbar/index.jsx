import { Link, Outlet } from 'react-router-dom';
import './navbar.scss';

const BarraSuperior = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto ">
              <li className="nav-item">
                <Link className="navbar-brand" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="navbar-brand" to="/dashboard">Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link className="navbar-brand" to="/produtos">Produtos</Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="navbar-brand" to="/configuracao">Configuracões</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default BarraSuperior