import Home from './pages/home/home';
import Search from './pages/searchEPI/searchEPI';
import Map from './pages/map/map';
import Removes from './pages/removes/removes';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login/login';
import HomeADM from './pages/adm/homeADM/homeADM';
import ListagemEPI from './pages/adm/ListagemEPI/ListagemEPI';
import NewEPI from './pages/adm/NewEPI/NewEPI';
import EditEPI from './pages/adm/EditEPI/EditEPI';
import ListagemMaquina from './pages/adm/ListagemMaquinas/ListagemMaquina';
import NewMaquina from './pages/adm/newMaquina/newMaquina';
import NewMaquina2 from './pages/adm/newMaquina2/newMaquina2';

function App() {
  return (
    <>
      <Routes>
        <Route path='/ListagemEPI' element={<ListagemEPI />} />
        <Route path='/NewEPI' element={<NewEPI />} />
        <Route path='/EditEPI' element={<EditEPI />} />
        <Route path='/ListagemMaquina' element={<ListagemMaquina />} />
        <Route path='/NewMaquina' element={<NewMaquina />} />
        <Route path='/NewMaquina2' element={<NewMaquina2 />} />


        <Route path='/HomeADM' element={<HomeADM />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Search' element={<Search />} />
        <Route path='/Map' element={<Map />} />
        <Route path='/Removes' element={<Removes />} />
        <Route path='/' element={<Login />} />
      </Routes>
    </>
  );
}


export default App;

