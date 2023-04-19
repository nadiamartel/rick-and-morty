import { useState } from "react";
import validation from "../Validation/validation";
import style from "./Form.module.css";

const Form = ({ login }) => { //le paso por parametro la fn atributo

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value //esto es que sea dinamico!!!
        })
        setErrors(
            validation(({
                ...userData,
                [event.target.name]: event.target.value
            }))
        )
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    return (
        <div className={style.gral}>
            {/* <img src="https://1.bp.blogspot.com/-PfWBPhWG41c/Xzw85k4Y9kI/AAAAAAAAZ7Y/w0HVL4fts3QoQ0mil3FZOmZNo9UXTiICACLcBGAsYHQ/d/Rick-and-morty-wallpaper-hd-by-heroscreen.png" alt="imagen" /> */}

            <form onSubmit={handleSubmit}>
                <div className={style.formContenedor}>
                    <h1>LOGIN</h1>

                    <label htmlFor="email">Email</label>
                    <input name="email" type="text" placeholder="Ingresa tu e-mail" value={userData.email} onChange={handleChange} />
                    {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

                    <label htmlFor="password">Password</label>
                    <input name="password" type="password" placeholder="Ingresa tu password" value={userData.password} onChange={handleChange} />
                    {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

                    <button>Submit</button>
                </div>
            </form>

        </div>
    )
}

export default Form;