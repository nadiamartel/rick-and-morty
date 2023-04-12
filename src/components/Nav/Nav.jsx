import style from "./Nav.module.css"
import SearchBar from "../SearchBar/SearchBar.jsx";
import { NavLink } from "react-router-dom";

export default function Nav({onSearch, setAccess}){

    const handleLogOut = () =>{
        setAccess(false);
    }

    return(
        <div className={style.divContenedor}>

            <h2 className={style.title}>EL MULTIVERSO</h2>

           <SearchBar onSearch={onSearch} />

           <button className={style.buttonAbout}>
                <NavLink to= "/about">About</NavLink>
           </button>

           <button className={style.buttonHome}>
                <NavLink to= "/home">Home</NavLink>
           </button>

           <button className={style.buttonFav}>
                <NavLink to= "/favorites">Favorites</NavLink>
           </button>

           <button onClick={handleLogOut} className={style.buttonLog}>LOG OUT</button>
        </div>
    )
}

//revisar si va con los atributos












