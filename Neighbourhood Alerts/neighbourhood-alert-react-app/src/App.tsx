
import './App.css'
import LandingPage from './pages/landingPage'
import VehicleForm from './pages/vehicle-form'
import PersonHtmlForm from './pages/person-form'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/vehicle-form' element={<VehicleForm/>}/>
      <Route path='/person-form' element={<PersonHtmlForm/>}/>
    </Routes>
  );
}

export default App
