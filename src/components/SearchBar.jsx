export default function SearchBar({onSearch}) {
   return (
      <div> 
         <input type="search" />
         <button onClick={ (characterID) => onSearch(characterID) }>Agregar</button>   
      </div>
   )
}

//necesito una funcion que ejecute a onSearch
//en App esta la definicion de la funcion que necesito
