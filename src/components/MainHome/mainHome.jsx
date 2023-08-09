import { useNavigate } from "react-router-dom"
      

const MainHome = () => {
    const navigate = useNavigate()
    const onClick = () =>{
        navigate('/Login')
    }
    return (
        <div> 
            <div>
                <h1> Bienvenido a BlackList Proyect API </h1>
                <h2> Aqui podras aseguararte de validar los correos recibidos en tu aplicacion web</h2>
            </div>
            <div>
                <h2> Ya posees una cuenta? Inicie sesion o registrese aqui</h2>
                <button onClick={onClick}> Acceder </button>
            </div>
        </div>
    )
}

export default MainHome