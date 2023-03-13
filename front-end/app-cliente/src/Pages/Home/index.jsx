import BarraSuperior from "../../Components/Navbar"
import Footer from "../../Components/Footer";
import './home.scss';
import logo from '../../assets/img/checklist.png';

const Home = () => {
    return(
        <>
        <BarraSuperior/>
        <div className="central">
            <img src={logo} alt="logo do sistema"/>
            <h2>Sistema de Controle Patrimonial</h2>
            <p>Versão: 1.0</p>
        </div>
        <Footer/>
        </>
            
    )
}

export default Home