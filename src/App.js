import './App.css';
import NavigationBar from './components/navigationbar';
import Home from './components/home';
import Skills from './components/skills';
import Projects from './components/projects';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';
import "bootstrap/dist/css/bootstrap.min.css";
import { Test } from './components/test';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Home />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <Footer />
      <Test />
    </div>
  );
}

export default App;
