
import './App.css'
import { Routes, Route } from 'react-router-dom'
// import TareasPaginas from './paginas/tareasPaginas'
import TareasForm from './paginas/TareasForm'
import NotFound from './paginas/NotFound'
// import NavBar from './componentes/NavBar'
import { TareasContextProv } from './componentes/context/TareasContext'
import Agenda from './paginas/Agenda'
import Alerta from './componentes/Alertas/Alerta'
// import BorrarTarea from './componentes/borrarTarea'
import NuevoRegistro from './componentes/Alertas/NuevoRegistro'
// import { Box } from '@mui/material'
import TablaNueva from './componentes/TablaNueva'
import TablaInactivos from './componentes/TablaInactivos'
import Ficha from './componentes/Ficha.jsx'
// import NavBar4 from './componentes/NavBar4'
import NavBar5 from './componentes/NavBar5'
import Portada from './paginas/Portada'
// import SidpacienteeBar from './componentes/SidpacienteeBar'
function App() {


  return (
    // className='container bg-orange-200 pt-20'
    <div>
      <NavBar5 />
      <TareasContextProv>
        <Routes>
          <Route path='/' element={<Portada />} />
          <Route path='/tabla' element={<TablaNueva />} />
          <Route path='/tablainac' element={<TablaInactivos />} />
          <Route path='/ficha/:idpaciente' Component={Ficha} />
          <Route path='/new' element={<TareasForm />} />
          {/* <Route path='/agenda' element={<Agenda />} /> */}
          <Route path='/edit/:idpaciente' element={<TareasForm />} />
          <Route path='/borrar/:idpaciente' Component={Alerta} />
          <Route path='/otroReg' Component={NuevoRegistro} />

          {/* <Route path='/menulateral' Component={<SidpacienteeBar/>} /> */}
          <Route path='*' Component={NotFound} />
        </Routes>
      </TareasContextProv>
    </div>

  )
}

export default App
