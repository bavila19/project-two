import './App.css';
import { Link } from 'react-router-dom'
import Compliments from './components/Compliments';
import Puppy from './components/Puppy';
import Hotline from './components/Hotline';
//components 

import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>How are you feeling?</h1>
      <nav>
      <Link to="/">
          <div>Home</div>
        </Link>
        <Link to="/compliments">
          <div>Compliments</div>
        </Link>
        <Link to="/Puppy">
          <div>Puppy Pick Me Ups</div>
        </Link>
        <Link to="/Hotline">
          <div>HOTLINE</div>
        </Link>
      </nav>
      <main>
        <Routes>
          <Route path='/' element=" " />
          <Route path="/compliments" element={<Compliments/>}/>
          <Route path="/Puppy" element={<Puppy/>} />
          <Route path="/Hotline" element={<Hotline/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
