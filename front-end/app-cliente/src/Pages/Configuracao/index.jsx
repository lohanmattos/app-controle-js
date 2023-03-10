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
                <h2>Seções:</h2>
                <table>
                    <tr>
                        <th>Nome da Seção</th>
                        <th>Departamento</th>
                    </tr>
                    <tr>
                        <td>Sala Técnica</td>
                        <td>Sala Radar</td>
                    </tr>
                    <tr>
                        <td>Sala da Administração</td>
                        <td>Administrativo</td>
                    </tr>
                </table>
            </div>
            <Footer/>
        </div>
    )
}

export default Configuracao