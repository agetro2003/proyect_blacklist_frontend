import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Profile = () =>{

    const [user, setUser] = useState({})
    const navigator = useNavigate()
    useEffect(
        ()=>{
            setUser({
                name: "Juan",
                plan: "Gratuito",
                reqRestantes: 14,
                API: '12345678'
            })
        },[]
    )

    return(
        <div>
            <div>
                <label> {user.name} </label>
                <label> {user.plan} </label>
                <label> {user.reqRestantes} </label>
                <label> {user.API} </label>
            </div>
            <h1>Aqui deberia ir una imagen de como se usaria esta api en un codigo</h1>
            <div>
                <button onClick={()=>{navigator('/Pricing')}}> Presione aqui si desea adquirir un nuevo plan</button>
            </div>
        </div>
    )
}

export default Profile;