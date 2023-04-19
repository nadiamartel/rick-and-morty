import axios from "axios";
import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css";

// const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
// const API_KEY = "878234e34ac0.a876ba3a751c3d2ce27d";

const Detail = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState({});
    
    useEffect(() => {
        axios(`http://localhost:3002/rickandmorty/character/${id}`)
        .then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return( 
        <div className={style.divContenedor}>
            <h1>Detail</h1>
            <h2>{character.name}</h2>
            <p>{character.status}</p>
            <p>{character.species}</p>
            <p>{character.gender}</p>
            <p>{character.origin?.name}</p>
            <img src={character.image} alt="" />
        </div>
    )
}

export  default Detail;