import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
function App() {
  return (
    <Router>
      <Navbar />
      {/*exact-para acessar exatamente a pg */}
      <Container customClass="min-height">  
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/company" element={<Company />} /> 
          <Route path="/contact" element={<Contact />}/>
          <Route path="/newproject" element={<NewProject />} />
        </Routes>
      </Container>      
          <Footer />
    </Router>
  )
}

export default App;
