import './App.css';
import NavigationBar from './components/navigationbar';
import Home from './components/home';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Home />
    </div>
  );
}

export default App;
