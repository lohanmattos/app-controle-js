import { BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';
import Home from '../Home'
import Dashboard from '../Dashboard'
import Pagina404 from '../Pagina404'
import Produtos from "../Produtos";
import Configuracao from "../Configuracao";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>}/>
            <Route path="dashboard" element={<Dashboard/>} />
            <Route path="produtos" element={<Produtos/>}/>
            <Route path="configuracao" element={<Configuracao/>}/>
            <Route path="*" element={<Pagina404/>}/>
          </Route>          
        </Routes>
    </BrowserRouter>
  )
}

export default App
