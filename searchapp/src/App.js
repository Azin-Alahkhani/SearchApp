import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import {useState} from 'react'
function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div className="App">
      <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
    </div>
  );
}

export default App;
