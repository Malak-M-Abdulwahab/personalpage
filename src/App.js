import './App.css';
import NavigationBar from './components/navigationbar';
import Home from './components/home';
import "bootstrap/dist/css/bootstrap.min.css";
import Skills from './components/skills';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Home />
      <Skills />
    </div>
  );
}

export default App;
