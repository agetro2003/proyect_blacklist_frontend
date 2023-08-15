import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Profile = ({user}) =>{

    const navigator = useNavigate()
    

    return(
        <div>
            <div>
                <label> API KEY: {user.api_key} </label>
                <label> Limite del plan {user.info_plan.limit_plan} </label>
            </div>
            <h1>Aqui deberia ir una imagen de como se usaria esta api en un codigo</h1>
            <div>
                <button onClick={()=>{navigator('/Pricing')}}> Presione aqui si desea adquirir un nuevo plan</button>
            </div>
        </div>
    )
}

export default Profile;