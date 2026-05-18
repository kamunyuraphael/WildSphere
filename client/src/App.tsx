import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Animals from './pages/Animals'
import Plants from './pages/Plants'
import Waters from './pages/Waters'
import About from './pages/About'
import SpeciesDetail from './pages/SpeciesDetails'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        
        {/* Main Category Pages */}
        <Route path='/animals' element={<Animals />} />
        <Route path='/plants' element={<Plants />} /> 
        <Route path='/waters' element={<Waters />} />
        <Route path='/about' element={<About />} /> 
        
        {/* The Dynamic Detail Page */}
        {/* When a user clicks a card, the ID (e.g., 'ani-lion') is passed here */}
        <Route path='/species/:id' element={<SpeciesDetail />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;