//import styles from "./Card.module.css"
import { Link } from "react-router-dom";
import style from "./Card.module.css";
import { connect} from "react-redux";
import { useState, useEffect } from "react";
import { addFav, removeFav } from "../../redux/action";


function Card({ id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites }) {

   // const myFavorites = useSelector(state => state.myFavorites)

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         removeFav(id);
      } else {
         setIsFav(true);
         addFav({ id, name, status, species, gender, origin, image, onClose })
      }

   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={style.divContenedor}>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         <button onClick={() => onClose(id)}>X</button>
         <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
         </Link>
         <img src={image} alt="Foto de Rick" className={style.img} />
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>

      </div>
   )
}
const mapDispatchProps = (dispatch) => {
   return {
      addFav: (character) => {
         dispatch(addFav(character));
      },
      removeFav: (id) => {
         dispatch(removeFav(id));
      }
   }
};

const mapStateToProps = (state) => {
    return{
       myFavorites : state.myFavorites,
    }
 }

export default connect(mapStateToProps, mapDispatchProps)(Card);

//hago destrunturing de todos los componentes que hay en card
//<button onClick={() => onClose(id)}>X</button> 
//linea 55: conecta a dispatch con las funciones! creamos una prop q tenga el mismo nombre que la funcion