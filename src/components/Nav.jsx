//  
import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";

export default function Nav({onSearch}){
    return(
        <div>
           <SearchBar onSearch={onSearch}/>
           <button>
                <NavLink to= "/about">About</NavLink>
           </button>

           <button>
                <NavLink to= "/home">Home</NavLink>
           </button>
        </div>
    )
}

//revisar si va con los atributos












