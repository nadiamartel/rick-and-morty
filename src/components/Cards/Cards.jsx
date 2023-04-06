import Card from '../Card/Card';

export default function Cards({characters, onClose}) {
   return (
   <div>
      {
         characters.map(({id, name, status, species, gender, origin, image}) =>{
            return(
               <Card
                  key = {id}
                  id = {id}
                  name = {name}
                  status = {status}
                  species = {species}
                  gender = {gender}
                  image = {image}
                  origin = {origin.name}
                  onClose = {onClose}
            />
            )
         })
      }
   </div>
   )
}
//por cada character quiero que me devuelva una Card con las prop
//la key que pide React, tiene que ser un valor unico, nos NO podemos acceder a su valor >>> la KEY es unicamente para React
//el onClose lo copio completo desde App.js