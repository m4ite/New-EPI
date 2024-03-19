import Home from './pages/home/home';
import Search from './pages/searchEPI/searchEPI';
import Map from './pages/map/map';
import Removes from './pages/removes/removes';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login/login';
import Teste from './pages/teste';

function App() {
  return (
    <>
    <Routes>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Search' element={<Search/>}/>
      <Route path='/Map' element={<Map/>}/>
      <Route path='/Removes' element={<Removes/>}/>
      <Route path='/' element={<Login/>}/>
      <Route path='/teste' element={<Teste/>}/>
    </Routes>
    </>
  );
}


export default App;

