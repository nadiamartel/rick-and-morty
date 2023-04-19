import './App.css';
import style from "./App.module.css";
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
// import characters from './data'; 
import {useState, useEffect} from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';

// const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
// const API_KEY = "878234e34ac0.a876ba3a751c3d2ce27d";

const EMAIL = 'nadiagmartel@gmail.com';
const PASSWORD = 'henry2023';


   function App() {
   const [characters, setCharacters] = useState([]);
   const location = useLocation();
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   
   const login = (userData) => {
   if(userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
   }
}

   useEffect(() => {
      !access && navigate('/');
   }, [access, navigate]);

   const onSearch = (id) => {
      axios(`http://localhost:3002/rickandmorty/character/${id}`)
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
         {location.pathname !== "/" && <Nav onSearch = {onSearch} setAccess={setAccess}/> }

         <Routes>
            <Route path="/" element={<Form login={login}/>} />
            <Route 
               path="/home" 
               element={
                  <div className={style.cardContenedor}>
               <Cards characters={characters} onClose={onClose} />
                  </div>
               }
               />
            
            <Route path="/about" element={<About/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>

         </Routes>

        
      </div>
   );
}

export default App;