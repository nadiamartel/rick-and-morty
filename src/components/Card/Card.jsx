//import styles from "./Card.module.css"
import { Link } from "react-router-dom";
import style from "./Card.module.css";

export default function Card({ id, name, status, species, gender, origin, image, onClose }) {
   return (
      <div className={style.divContenedor}>
            <button onClick={() => onClose(id)}>X</button>
         <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
         </Link>
            <img src={image} alt="Foto de Rick" />
            <h2>{status}</h2>
            <h2>{species}</h2>
            <h2>{gender}</h2>
            
      </div>
   )
}

//hago destrunturing de todos los componentes que hay en card
//<button onClick={() => onClose(id)}>X</button> 