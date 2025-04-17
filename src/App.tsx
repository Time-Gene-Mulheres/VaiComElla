

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import SobreNos from './pages/sobrenos/SobreNos'
import NossoAplicativo from './pages/nossoaplicativo/NossoAplicativo'

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <div className='min-h-[80vh]'>   
      <Routes>        
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sobrenos" element={<SobreNos />} />
        <Route path="/nossoaplicativo" element={<NossoAplicativo />} />
      </Routes>
      </div>
    <Footer />  
    </BrowserRouter>
    </>
  )
}

export default App
