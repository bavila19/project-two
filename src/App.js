import './App.css';
import { Link } from 'react-router-dom'
import Compliments from './components/Compliments';
import Insults from './components/Insults';
import Hot from './components/Hotline';
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
        <Link to="/insults">
          <div>Insults</div>
        </Link>
      </nav>
      <main>
        <Routes>
          <Route path='/' element=" " />
          <Route path="/compliments" element={<Compliments/>}/>
          <Route path="/insults" element={<Insults/>} />
        </Routes>
       
      </main>
    </div>
  );
}

export default App;
