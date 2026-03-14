
import './App.css'
import LandingPage from './pages/landingPage'
import VehicleForm from './pages/vehicle-form'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/vehicle-form' element={<VehicleForm/>}/>
    </Routes>
  );
}

export default App
