import { useNavigate } from "react-router-dom"
      

const MainHome = () => {
    const navigate = useNavigate()
    const onClick = () =>{
        navigate('/Login')
    }
    return (
        <div> 
            <div>
                <h1> Bienvenido a BlackList Filter API </h1>
                <h2> Aqui podrás aseguararte de validar los correos recibidos en tu aplicacion web</h2>
            </div>
            <div>
                <h2> ¿Ya tienes una cuenta? Inicie sesión o regístrese aquí</h2>
                <button onClick={onClick}> Acceder </button>
            </div>
        </div>
    )
}

export default MainHome