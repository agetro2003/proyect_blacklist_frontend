import React, { useEffect } from "react";
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

// import "./home.css"

// const Home = () => {
//     return (
//         <div className="navigation">
//             <ul className="Nav-bar">
//                 <li id="name">NavBar</li>
//                 <li><a href="/">Home</a></li>
//                 <li><a href="/work">Work</a></li>
//                 <li><a href="/services">Services</a></li>
//                 <li><a href="/contact">Contact</a></li>
//             </ul>

// import styles from './home.module.css'
// import Pricing from "../Pricing/pricing";
// import Navbar from "../Navbar/navbar";
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

export default Home;