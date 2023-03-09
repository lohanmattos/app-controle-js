import { BrowserRouter, Routes, Route} from "react-router-dom";
import './app.scss';
import Home from '../Home'
import Dashboard from '../Dashboard'
import Pagina404 from '../Pagina404'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>}/>
            <Route path="dashboard" element={<Dashboard/>} />
            <Route path="*" element={<Pagina404/>}/>
          </Route>          
        </Routes>
    </BrowserRouter>
  )
}

export default App
