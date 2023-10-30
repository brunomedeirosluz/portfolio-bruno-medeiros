import { Route, Routes } from 'react-router-dom';
import Main from './Components/Main';
import About from './Pages/AboutPage';
import Projects from './Pages/ProjectsPage';
import Contact from './Pages/ContactPage';
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
