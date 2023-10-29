import { Route, Routes } from 'react-router-dom';
import Main from './Components/Main';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import './App.css';


function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={ <Main /> } />
      <Route path="/about" element={ <About /> } />
      <Route path="/projects" element={ <Projects /> } />
      <Route path="/contact" element={ <Contact />} />
      </Routes>
    </div>
  )

}

export default App
