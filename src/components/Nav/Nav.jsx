import style from "./Nav.module.css"
import SearchBar from "../SearchBar/SearchBar.jsx";
import { NavLink } from "react-router-dom";

export default function Nav({onSearch}){
    return(
        <div className={style.divContenedor}>
           <SearchBar onSearch={onSearch} />

           <button className={style.buttonAbout}>
                <NavLink to= "/about">About</NavLink>
           </button>

           <button className={style.buttonHome}>
                <NavLink to= "/home">Home</NavLink>
           </button>
        </div>
    )
}

//revisar si va con los atributos












