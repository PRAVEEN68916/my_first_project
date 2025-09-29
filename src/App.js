import Contact from './components/Contact';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import About from './components/About';
import Skills from './components/Skills';
import Grades from './components/Grades';



function App() {
  return (
    <div>
      <Header />
      <About />
      <Skills />
      <Grades />
      <Contact />
      <Footer />
    </div>
    
  );
}

export default App;
