import { Route, Routes } from "react-router-dom";
import CrearCuenta from "./pages/CrearCuenta";
import Home from "./pages/Home";
import HomeAdmin from "./pages/admin/Home";
import IniciarSesion from "./pages/IniciarSesion";
import Watch from "./pages/admin/Watch";
import Player from "./pages/admin/Player";
import Peliculas from "./pages/admin/Peliculas";
import Series from "./pages/admin/Series";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='crear-cuenta' element={<CrearCuenta />} />
        <Route path='inciar-sesion' element={<IniciarSesion />} />
        <Route path='/home' element={<HomeAdmin />} />
        <Route path='/peliculas' element={<Peliculas />} />
        <Route path='/series' element={<Series />} />
        <Route path='/watch/:id' element={<Watch />} />
        <Route path='/player/:id' element={<Player />} />
      </Routes>
    </>
  );
}

export default App;
