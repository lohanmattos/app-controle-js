import Footer from "../../Components/Footer";
import BarraSuperior from "../../Components/Navbar";
import "./configuracao.css"

const Configuracao = () => {
    return (
        <div>
            <BarraSuperior />
            <div className="container">
                <div class="container mt-2">
                    <h2>PineApple</h2>
                    <p>Soluções em Tecnologias</p>
                    <table class="table caption-top">
                    <caption>Lista de Departamentos</caption>
                        <thead class="table-defaut">
                            <tr>
                                <th>Sigla</th>
                                <th >Nome do Departamento</th>
                                <th colspan="2" >Opções</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>ADM</td>
                                <td>Administrativo</td>
                                <td>Mais</td>
                                <td>Editar</td>
                            </tr>
                            <tr>
                                <td>TI</td>
                                <td>Tecnologia da Informação</td>
                                <td>Mais</td>
                                <td>Editar</td>
                            </tr>
                            <tr>
                                <td>RH</td>
                                <td>Recuros Humanos</td>
                                <td>Mais</td>
                                <td>Editar</td>
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