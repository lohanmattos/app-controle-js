import Footer from "../../Components/Footer";
import BarraSuperior from "../../Components/Navbar";
import "./configuracao.scss"

const Configuracao = () => {
    return (
        <div>
            <BarraSuperior />
            <div className="container">
                <h1>Configurações da Empresa</h1>
                <hr />
                <h2>Nome da Empresa: </h2><span>DTCEA-SI</span>
                <hr />
                <h2>Departamentos:</h2>
                <ul>
                    <li>Administrativa</li>
                    <li>Técnica</li>
                    <li>Comando</li>
                </ul>
                <hr />               
            </div>
            <Footer/>
        </div>
    )
}

export default Configuracao