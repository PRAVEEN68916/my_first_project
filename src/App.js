import Contact from './components/Contact';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import About from './components/About';
import Skills from './components/Skills';
import Grades from './components/Grades';
import Card from './components/Card'; 
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';


function App() {
  return (
    
    <>
   
    <BrowserRouter>
    <Header/>
    
    <Routes>
      <Route path='/' element={
        <>
          <About/>
          <Skills/>
          <Grades/>
          <Contact/>
          <Card/>
        </>
      }/>
      <Route path='/about' element={<About/>}/>
      <Route path='/skills' element={<Skills/>}/>
      <Route path='/grades' element={<Grades/>}/>
      <Route path='/contact' element={<Contact/>}/>
       <Route path='/card' element={<Card/>}/>
   
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
