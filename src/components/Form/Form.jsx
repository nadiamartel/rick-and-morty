import {useState} from "react";
import validation from "./validation";

const Form = ({login}) =>{ //le paso por parametro la fn atributo

    const [userData, setUserData] = useState({
        email : "",
        password : ""
    })

    const [errors, setErrors] = useState({});

    const handleChange = (event) =>{
        setUserData({
            ...userData,
            [event.target.name] : event.target.value
        })  
        setErrors(
            validation(({
            ...userData,
            [event.target.name] : event.target.value    
            }))
        )
    }  

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input name="email" type="text" placeholder="Ingresa tu e-mail" value={userData.email} onChange={handleChange}/>
            {errors.email && <p style={{color:"red"}}>{errors.email}</p>}

            <label htmlFor="password">Password</label>
            <input name="password" type="text" placeholder="Ingresa tu password" value={userData.password} onChange={handleChange} />
            {errors.password && <p style={{color:"red"}}>{errors.password}</p>}

            <button>Submit</button>
        </form>
    )
}

export default Form;