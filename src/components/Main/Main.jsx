import { useEffect, useState } from "react";
import Test from "../Test/Test";
import Profile from "../Profile/Profile";
import API_AXIOS from "../../../settings/AxiosInstance";
import endpointList from "../../../settings/endpoints";

const Main = () => {
    const [user, setUser] = useState({
    api_key: "",
    birth_usuario: "",
    info_plan: {
      cost_plan: 0,
      desc_plan: "free",
      id_plan: 1,
      limit_plan: 20
    },
    name_user: "",
    tlfn_usuario: "",
    requests: 0
    })

    useEffect(()=>{
        (async()=>{
         try {
        const userEmail = localStorage.getItem('userEmail')
        const user = await API_AXIOS.post(endpointList.user_info, {mail_usuario: userEmail.slice(1, userEmail.length -1)})
        console.log(user.data.data)

        setUser(user.data.data)
    } catch (error) {
            console.log(error)
        }   
        })()
        
    }, [])
    const [check, setCheck] = useState(false)

    return (
        <>
            <h1> Bienveido {user.name_user} </h1>

            <h2>Para realizar una prueba de nuestra API presione el siguiente boton </h2>
            <button onClick={()=>{setCheck(false)}}> Prueba </button>

            <h2>Para acceder a la documentacion de nuestra aplicacion acceda al siguiente boton</h2>
            <button onClick={()=>{setCheck(true)}}> Documentacion </button>
            {
                check
                ? <Profile user={user}></Profile>
                : <Test></Test>
            }
        </>
    )
};
export default Main;