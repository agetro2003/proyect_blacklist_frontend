import React, { useEffect } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
 import Card from '@mui/material/Card';
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
import { CardActionArea, CardContent, CardMedia } from "@mui/material";
import styles from "./home.module.css"
// import MainHome from "../MainHome/mainHome";

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

const Home = () => {
    return (
        // Navbar
        <ThemeProvider theme={defaultTheme}>
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
                        BlackList Filter API
                    </Typography>
                    <nav>
                        <Link
                            variant="button"
                            color="text.primary"
                            href="/"
                            sx={{ my: 1, mx: 1.5 }}
                            underline="none"
                        >
                            Inicio
                        </Link>
                        <Link
                            variant="button"
                            color="text.primary"
                            href="/Pricing"
                            sx={{ my: 1, mx: 1.5 }}
                            underline="none"

                        >
                            Planes
                        </Link>
                        <Link
                            variant="button"
                            color="text.primary"
                            href="#footer"
                            sx={{ my: 1, mx: 1.5 }}
                            underline="none"
                        >
                            Contactanos
                        </Link>
                    </nav>
                    <Button href="/Login" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                        Login
                    </Button>
                </Toolbar>
            </AppBar>

            <div className={styles.home}>
                <img src="\imagenHome.jpg" alt="imagenFondo" width={800} height={600}/>
                <React.Fragment>
                    <CardContent>
                        <Typography variant="h2" component="div">
                        Bienvenido a BlackList Filter API
                        Su API para validar correos de confianza
                        </Typography>
                        <Typography variant="h5">
                            Con nuestro servicio podras identificar correos temporales o inválidos.
                         </Typography>
                    </CardContent>
                </React.Fragment>
            </div>

            {/*
            <Card sx={{ maxWidth: 1500, padding: 5, marginLeft:50, marginRight: 50}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image='../../../public/imagenHome.jpg'
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            BlackList Proyect
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Bienvenido a nuestro servicio de verificacion de correos insanos. 
            Donde podras usar nuestra API para validar que los correos que reciba tu aplicacion no sean temporales
            
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>*/}

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
                <Grid id="footer" container spacing={4} justifyContent="space-evenly">
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

export default Home;