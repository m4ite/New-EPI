import Home from './pages/home/home';
import Search from './pages/searchEPI/searchEPI';
import Map from './pages/map/map';
import Removes from './pages/removes/removes';
import MaquinaEPI from './pages/maquinaEPI/maquinaEPI';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login/login';
import HomeADM from './pages/adm/homeADM/homeADM';
import ListagemEPI from './pages/adm/ListagemEPI/ListagemEPI';
import EditEPI from './pages/adm/EditEPI/EditEPI';
import ListagemMaquina from './pages/adm/ListagemMaquinas/ListagemMaquina';
import NewMaquina from './pages/adm/newMaquina/newMaquina';
import Loading from './pages/loading/loading'

function App() {
  return (
    <>
      <Routes>
<<<<<<< HEAD
        <Route path='/' element={<Login />} />
=======
        <Route exact path='/' element={<Login />} />
>>>>>>> 65df20780b9b05d4845f322b2b4d49b224c72703
        <Route path='/ListagemEPI' element={<ListagemEPI />} />
        <Route path='/EditEPI' element={<EditEPI />} />
        <Route path='/ListagemMaquina' element={<ListagemMaquina />} />
        <Route path='/NewMaquina' element={<NewMaquina />} />
        <Route path='/MaquinaEPI/:id' element={<MaquinaEPI />} />
        <Route path='/HomeADM' element={<HomeADM />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Search' element={<Search />} />
        <Route path='/Map' element={<Map />} />
        <Route path='/Removes' element={<Removes />} />
<<<<<<< HEAD
=======
        <Route path='/loading' element={<Loading />} />

>>>>>>> 65df20780b9b05d4845f322b2b4d49b224c72703
      </Routes>
    </>
  );
}


export default App;

