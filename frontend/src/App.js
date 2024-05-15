import Home from './pages/home/home';
import Search from './pages/searchEPI/searchEPI';
import Map from './pages/map/map';
import Removes from './pages/removes/removes';
import MaquinaEPI from './pages/maquinaEPI/maquinaEPI';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login/login';
import HomeADM from './pages/adm/homeADM/homeADM';
import ListagemEPI from './pages/adm/ListagemEPI/ListagemEPI';
import ListagemMaquina from './pages/adm/ListagemMaquinas/ListagemMaquina';
import Uniforme from './pages/uniforme/uniforme';
import Loading from './pages/loading/loading'
import HistoricoSolicitacoes from './pages/historicoSolicitacoes/historicoSolicitacoes';
import AprovarSolicitacoes from './pages/adm/aprovarSolicitações/aprovarSolicitações';
import EstoqueMaquina from './pages/adm/estoqueMaquinas/estoqueMaquinas';
import BuscarEPI from './pages/adm/buscarEPI/buscarEPI';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route path='/ListagemEPI/:id' element={<ListagemEPI />} />
        <Route path='/ListagemMaquina' element={<ListagemMaquina />} />
        <Route path='/MaquinaEPI' element={<MaquinaEPI />} />
        <Route path='/Uniformes' element={<Uniforme/>}/>
        <Route path='/historicoSolicitacoes' element={<HistoricoSolicitacoes/>}/>
        <Route path='/HomeADM' element={<HomeADM />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Search' element={<Search />} />
        <Route path='/Map' element={<Map />} />
        <Route path='/Removes' element={<Removes />} />
        <Route path='/loading' element={<Loading />} />
        <Route path='/Aprovar' element={<AprovarSolicitacoes />} />
        <Route path='/estoqueMaquina' element={<EstoqueMaquina/>}/>
        <Route path='/buscarEPI' element={<BuscarEPI/>}/>
      </Routes>
    </>
  );
}


export default App;

