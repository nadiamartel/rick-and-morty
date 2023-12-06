import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { orderCards } from "../../redux/action";
import { filterCards } from "../../redux/action";
import { useState} from "react";
import s from "./Favorite.module.css";


const Favorites = () => {

    const favorites = useSelector((state) => state.myFavorites);
    const dispatch = useDispatch();
    const [aux, setAux] = useState(false);

    const handleOrder = (event) =>{
        dispatch(orderCards(event.target.value))
        setAux(true)
    }
    const handleFilter  = (event) =>{
        dispatch(filterCards(event.target.value))
    }

    return(
        <div className={s.contenedor}>
            <div>
                    <select onChange={handleOrder}>
                        <option value="A">ASCENDENTE</option>
                        <option value="D">DESCENDENTE</option>
                    </select>

                    <select onChange={handleFilter}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Genderless">Gerderless</option>
                        <option value="unknown">unknown</option>
                        {/* <option value="allCharacters">allCharacters</option> */}
                    </select>
            </div>   
            {
                favorites.map(({id, name, species, gender, image, onClose}) => {
                    return (<Card
                    key = {id}
                    id = {id}
                    name = {name}
                    species = {species}
                    gender = {gender}
                    image = {image}   
                    onClose={onClose}
                    />
                    );
                })
            } 
            
        </div>
    )
}

export default Favorites;