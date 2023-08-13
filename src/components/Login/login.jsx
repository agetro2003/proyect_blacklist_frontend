import { useState } from "react";
import "./login.css"
import { useLocalStorage } from "../../hooks/useLocalStorage.js";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
// import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import Overlay from "../Overlay/Overlay";
import Alert from "../Alert/Alert";
import API_AXIOS from "../../../settings/AxiosInstance";
import endpointList from "../../../settings/endpoints";

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="#">
                Insane Domains
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const footers = [
    {
        title: 'Company',
        description: ['Team', 'History', 'Contact us', 'Locations'],
    },
    {
        title: 'Features',
        description: [
            'Cool stuff',
            'Random feature',
            'Team feature',
            'Developer stuff',
            'Another one',
        ],
    },
    {
        title: 'Resources',
        description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
    },
    {
        title: 'Legal',
        description: ['Privacy policy', 'Terms of use'],
    },
];

const defaultTheme = createTheme();

const Login = () => {
const [alert, setAlert] = useState({
    active:false,
    title: "",
    content: ""
}) 
const [loading, setLoading] = useState(false)
 const [isLog, setLogin] = useLocalStorage('session', '')
 const [data, setData] = useState({
    name_usuario: "",
    tlfn_usuario: "",
    pswd_usuario: "",
    mail_usuario: "",
    birth_usuario:"",
    id_plan: 1
 })

    const handleInputs = (e) => {
        const {name, value} = e.target;
        const newData = {
            ...data,
            [name]: value
        }
        setData(newData)
    }
    const handleLogin = ()=>{
        setLoading(true)
        let loginData = {
            mail_usuario: data.mail_usuario,
            pswd_usuario: data.pswd_usuario
        }
        console.log(loginData)
        
        let pswd_usuario = '123456'
        if (pswd_usuario == "123456") {

            let date = new Date()
            setLogin(date)
            setLoading(false)
            setAlert(true)
            window.location.assign('main')
        }
    }

    const handleRegister = async () => {
        setLoading(true)
        try {
        const registeredFlag = await API_AXIOS.post(endpointList.register, data)
        setAlert({
            active: true,
            title: "Mensaje",
            content: registeredFlag.data.message
        })
        console.log(registeredFlag)
        console.log(data)
        } catch (error) {
            console.log(error)
            setAlert({
                active: true,
                title: "Error",
                content:error.response.data.message
            })
        }
        
        setLoading(false)
      
    }

    return (

        // Navbar
        <ThemeProvider theme={defaultTheme}>
            {alert.active && (
                <Alert open={alert.active} setOpen={setAlert} title={alert.title} content={alert.content}></Alert>
            )}
             {loading && (
             <Overlay>
             </Overlay>
             )}
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
            <CssBaseline />
            <AppBar
                position="static"
                color="default"
                elevation={0}
                sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
            >
                <Toolbar sx={{ flexWrap: 'wrap' }}>
                    <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                        Dominio de Correos Insanos
                    </Typography>
                    <nav>
                        <Link
                            variant="button"
                            color="text.primary"
                            href="/"
                            sx={{ my: 1, mx: 1.5 }}
                        >
                            Home
                        </Link>
                        <Link
                            variant="button"
                            color="text.primary"
                            href="/Pricing"
                            sx={{ my: 1, mx: 1.5 }}
                        >
                            Pricing
                        </Link>
                        <Link
                            variant="button"
                            color="text.primary"
                            href="#"
                            sx={{ my: 1, mx: 1.5 }}
                        >
                            Support
                        </Link>
                    </nav>
                    <Button href="/Login" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
            {}
            <div className="section">
                <div className="container">
                    <div className="row full-height justify-content-center">
                        <div className="col-12 text-center align-self-center py-5">
                            <div className="section pb-5 pt-5 pt-sm-2 text-center">
                                {/* <h6 className="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6> */}
                                <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                                <label htmlFor="reg-log"></label>
                                <div className="card-3d-wrap mx-auto">
                                    <div className="card-3d-wrapper">
                                        <div className="card-front">
                                            <div className="center-wrap">
                                                <div className="section text-center">
                                                    <h4 className="mb-4 pb-3 login-titulo">Log In</h4>
                                                    <div className="form-group">
                                                    <input onChange={handleInputs}  name="mail_usuario" type="email" value={data.mail_usuario} className="form-style" placeholder="Email" />
                                                        <i className="input-icon uil uil-at"></i>
                                                    </div>
                                                    <div className="form-group mt-2">
                                                    <input onChange={handleInputs} name="pswd_usuario" type="password" value={data.pswd_usuario} className="form-style" placeholder="Password" />
                                                        <i className="input-icon uil uil-lock-alt"></i>
                                                    </div>
                                                    <div className="login-boton-holder">
                                                        <button onClick={handleLogin} className="btn mt-4">Login</button>
                                                    </div>
                                                    <p className="mb-0 text-center"><a href="#" className="link">Forgot your password?</a></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-back">
                                            <div className="center-wrap">
                                                <div className="section text-center">
                                                    <h4 className="mb-3 pb-3 login-titulo">Sign Up</h4>
                                                    <div className="form-group">
                                                    <input onChange={handleInputs} name="name_usuario" type="text" value={data.name_usuario} className="form-style" placeholder="Full Name" />
                                                        <i className="input-icon uil uil-user"></i>
                                                    </div>
                                                    <div className="form-group mt-2">
                                                    <input onChange={handleInputs} name="tlfn_usuario" type="tel" value={data.tlfn_usuario} className="form-style" placeholder="Phone Number" />
                                                        <i className="input-icon uil uil-phone"></i>
                                                    </div>
                                                    <div className="form-group mt-2">
                                                    <input onChange={handleInputs} name="mail_usuario" type="email" value={data.mail_usuario} className="form-style" placeholder="Email" />
                                                        <i className="input-icon uil uil-at"></i>
                                                    </div>
                                                    <div className="form-group mt-2">
                                                    <input onChange={handleInputs} name="pswd_usuario" type="password" value={data.pswd_usuario} className="form-style" placeholder="Password" />
                                                        <i className="input-icon uil uil-lock-alt"></i>
                                                    </div>
                                                    <div className="form-group mt-2">
                                                    <input onChange={handleInputs} name="birth_usuario" type="date" value={data.birth_usuario} className="form-style" placeholder="Birthdate"/>
                                                        <i className="input-icon uil uil-lock-alt"></i>
                                                    </div>
                                                    <div className="login-boton-holder">
                                                    <button onClick={handleRegister} className="btn mt-4">Register</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Container
                maxWidth="md"
                component="footer"
                sx={{
                    borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                    mt: 8,
                    py: [3, 6],
                }}
            >
                <Grid container spacing={4} justifyContent="space-evenly">
                    {footers.map((footer) => (
                        <Grid item xs={6} sm={3} key={footer.title}>
                            <Typography variant="h6" color="text.primary" gutterBottom>
                                {footer.title}
                            </Typography>
                            <ul>
                                {footer.description.map((item) => (
                                    <li key={item}>
                                        <Link href="#" variant="subtitle1" color="text.secondary">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Grid>
                    ))}
                </Grid>
                <Copyright sx={{ mt: 5 }} />
            </Container>
            {/* End footer */}
        </ThemeProvider>

    );
};

export default Login;