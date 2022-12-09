import './App.css';
import { Link } from 'react-router-dom'
import Compliments from './components/Compliments';
import Puppy from './components/Puppy';
import Hotline from './components/Hotline';
import About from './components/About';
import Home from './components/Home'
//components 

import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>How are you feeling?</h1>
      <nav>
        <Link to="/" id='home'>
          <div>Home</div>
        </Link>
        <div className='about-hotline'>
          <Link to="/About" id='about'>
            <div>About</div>
          </Link>
          <Link to="/Hotline" id='hotline'>
            <div>HOTLINE</div>
          </Link>
        </div>
      </nav>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/compliments" element={<Compliments/>}/>
          <Route path="/Puppy" element={<Puppy/>} />
          <Route path="/Hotline" element={<Hotline/>} />
          <Route path="/About" element={<About/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
