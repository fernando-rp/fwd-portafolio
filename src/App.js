import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar'
import Banner from './components/Banner';
import Portafolio from './components/Portafolio'
import Experiencia from './components/Experiencia';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import Skills from './components/Skills';


import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import 'jquery'
import '@popperjs/core'
import 'bootstrap'
import 'react-icons'


function App() {
  return (
    <div className="">
        <Navbar/>
        <Banner/>
        <Portafolio/>
        <Experiencia/>
        <Skills/>
        <Contacto/>
        <Footer/>
    </div>
    )
}

export default App;
