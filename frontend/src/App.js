import './App.css';
import Home from './pages/home/home';
import Search from './pages/searchEPI/searchEPI';
import Map from './pages/map/map';
import Removes from './pages/removes/removes';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login/login';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Search' element={<Search/>}/>
      <Route path='/Map' element={<Map/>}/>
      <Route path='/Removes' element={<Removes/>}/>
      <Route path='/Login' element={<Login/>}/>

    </Routes>
    </>
  );
}


export default App;

