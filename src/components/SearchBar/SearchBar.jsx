import { useState } from 'react';
import style from "./SearchBar.module.css"


export default function SearchBar({onSearch}) {
   const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value)
   }

   return (
      <div >
         <input type='search' onChange={handleChange} value={id} placeholder="ingresa un id" className={style.input}/>
         <button onClick={() => {onSearch(id); setId("")} } className={style.button}>Agregar</button>
      </div>
   );
}

//necesito una funcion que ejecute a onSearch
//en App esta la definicion de la funcion que necesito
//uso un callback para ejecutar la funcion sino se rompe el cod (item 4 de ejec 6)
