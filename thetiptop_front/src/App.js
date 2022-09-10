import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Header />
    </div>
  );
}

export default App;
