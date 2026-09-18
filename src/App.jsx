import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/services" element={<Services />} />

          <Route path="/projects" element={<Projects />} />

          {/* <Route path="/academics" element={<Academics />} />

          <Route path="/admissions" element={<Admissions />} />

          <Route path="/news-events" element={<News />} />

          <Route path="/gallery" element={<Gallery />} />

          <Route path="/contact" element={<Contact />} /> */}

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
