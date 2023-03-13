import Footer from "../../Components/Footer";
import BarraSuperior from "../../Components/Navbar";
import "./configuracao.scss"

const Configuracao = () => {
    return (
        <div>
            <BarraSuperior />
            <div className="container">
                <div class="container mt-2">
                    <h2>Nome da Empresa</h2>
                    <p>Desenvolvimento de Sistemas</p>
                    <table class="table">
                        <thead class="table-defaut">
                            <tr>
                                <th>Departamentos</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Administrativa</td>
                            </tr>
                            <tr>
                                <td>Técnica</td>
                            </tr>
                            <tr>
                                <td>Comando</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Configuracao