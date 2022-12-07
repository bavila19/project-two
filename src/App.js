import './App.css';
import { Link } from 'react-router-dom'
import Compliments from './components/Compliments';
import Meme from './components/Meme';
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
        <Link to="/Hotline">
          <div>HOTLINE</div>
        </Link>
      </nav>
      <main>
        <Routes>
          <Route path='/' element=" " />
          <Route path="/compliments" element={<Compliments/>}/>
          <Route path="/Meme" element={<Meme/>} />
          <Route path="/Hotline" element={<Hotline/>} />
        </Routes>
       
        <Link to="/compliments">
          <div>Compliments</div>
        </Link>
        <Link to="/Meme">
          <div>Funny Memes</div>
        </Link>
      </main>
    </div>
  );
}

export default App;
