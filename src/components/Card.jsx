//import styles from "./Card.module.css"

export default function Card({id, name, status, species, gender, origin, image, onClose}) {  
   return (
      <div>
         <button onClick={onClose}>X</button> 
         <h2>{name}</h2>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img src={image} alt="Foto de Rick" />
      </div>
   )
}

//hago destrunturing de todos los componentes que hay en card