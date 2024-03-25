import Home from './pages/home/home';
import Search from './pages/searchEPI/searchEPI';
import Map from './pages/map/map';
import Removes from './pages/removes/removes';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login/login';
import Teste from './pages/teste';
import HomeADM from './pages/adm/homeADM/homeADM';
import ListagemEPI from './pages/adm/ListagemEPI/ListagemEPI';
import NewEPI from './pages/adm/NewEPI/NewEPI';
import EditEPI from './pages/adm/EditEPI/EditEPI';
import ListagemMaquina from './pages/adm/ListagemMaquinas/ListagemMaquina';

function App() {
  return (
    <>
      <Routes>
        <Route path='/ListagemEPI' element={<ListagemEPI />} />
        <Route path='/NewEPI' element={<NewEPI />} />
        <Route path='/EditEPI' element={<EditEPI />} />
        <Route path='/ListagemMaquina' element={<ListagemMaquina />} />

        <Route path='/HomeADM' element={<HomeADM />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Search' element={<Search />} />
        <Route path='/Map' element={<Map />} />
        <Route path='/Removes' element={<Removes />} />
        <Route path='/' element={<Login />} />
        <Route path='/teste' element={<Teste />} />
      </Routes>
    </>
  );
}


export default App;

