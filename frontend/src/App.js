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

import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <>
    <SpeedInsights/>
    <Analytics/>
      <Routes>
        <Route exact path='/' element={<Login />} />
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
      </Routes>
    </>
  );
}


export default App;

