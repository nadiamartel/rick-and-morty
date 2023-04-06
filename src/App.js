import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
// import characters from './data'; 
import {useState} from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';

const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
const API_KEY = "878234e34ac0.a876ba3a751c3d2ce27d";

   function App() {
   const [characters, setCharacters] = useState([]);

   const onSearch = (id) => {
      axios(`${URL_BASE}/${id}?key=${API_KEY}`)
      .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            alert("¡No hay personajes con este ID!");
         }
      });
   }

   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => character.id !== id)
      setCharacters(charactersFiltered)
   }

   return (
      <div>
          <Nav onSearch = {onSearch}/>
          <Routes>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
          </Routes>

        
      </div>
   );
}

export default App;