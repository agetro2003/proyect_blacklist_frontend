const Main = () => {
    const user = {
        nombre: "pepe",
        API: "12345678",
        reqRestantes: 20
    }
    return (
        <>
            <h1> Bienveido {user.nombre} </h1>

            <h2> A usted le quedan {user.reqRestantes} consultas restantes</h2>
            <h2> Su API key es {user.API} </h2>

            <h2>Para realizar una prueba de nuestra API presione el siguiente boton </h2>
            <button> Prueba </button>

            <h2>Para acceder a la documentacion de nuestra aplicacion acceda al siguiente boton</h2>
            <button> Documentacion </button>
        </>
    )
};
export default Main;