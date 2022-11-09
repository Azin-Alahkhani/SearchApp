import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { Routess } from './components/Routess';
import { Footer } from './components/Footer';
import {useState} from 'react'
function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className="dark:bg-gray-900 bg-gray-100 dark:text-gray-200 black min-h-screen">
        <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
        <Routess />
        <Footer />
      </div>
    </div>
  );
}

export default App;
