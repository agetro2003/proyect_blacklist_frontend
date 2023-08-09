import { useState } from "react";
import Test from "../Test/Test";
import Profile from "../Profile/Profile";

const Main = () => {
    const user = {
        nombre: "pepe",
        API: "12345678",
        reqRestantes: 20
    }

    const [check, setCheck] = useState(false)

    return (
        <>
            <h1> Bienveido {user.nombre} </h1>

            <h2> A usted le quedan {user.reqRestantes} consultas restantes</h2>
            <h2> Su API key es {user.API} </h2>

            <h2>Para realizar una prueba de nuestra API presione el siguiente boton </h2>
            <button onClick={()=>{setCheck(false)}}> Prueba </button>

            <h2>Para acceder a la documentacion de nuestra aplicacion acceda al siguiente boton</h2>
            <button onClick={()=>{setCheck(true)}}> Documentacion </button>
            {
                check
                ? <Profile></Profile>
                : <Test></Test>
            }
        </>
    )
};
export default Main;