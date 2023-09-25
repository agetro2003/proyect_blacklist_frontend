import * as React from 'react';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Title from './Title';
import { Grid, Button } from '@mui/material';
import Alert from '../Alert/Alert';
import Overlay from '../Overlay/Overlay';
import { useState } from 'react';
import API_AXIOS from '../../../settings/AxiosInstance';
import endpointList from '../../../settings/endpoints';

export default function EmailValidationForm() {
  const [loading, setLoading] = useState(false)
    const [alert, setAlert] = useState({
    active:false,
    title: "",
    content: ""
}) 
    const [email, setMail] = useState('')
    const [userMail, setUserMail] = useState(localStorage.getItem('userEmail').slice(1, localStorage.getItem('userEmail').length -1));
    const handleClick =  async(e) => {
      setLoading(true)
      
      try {
          const validateEmail = await API_AXIOS.post(endpointList.validate_email, {email})
          const validateDomain = await API_AXIOS.post(endpointList.validate_domain, {email, mail_usuario: userMail})
          setLoading(false)
          setAlert({
              active: true,
              title: "Resultado",
              content: `${validateEmail.data.message} y ${validateDomain.data.message}`
          })
      } catch (error) {
          setLoading(false)
          try {
            setAlert({
              active: true,
              title: "Resultado",
              content:error.response.data.message
          })
          } catch (e) {
            setAlert({
              active: true,
              title: "Error",
              content:e.message
          })
          }
          
      }
  }
    return (
      <React.Fragment>
        {alert.active && (
                <Alert open={alert.active} setOpen={setAlert} title={alert.title} content={alert.content}></Alert>
            )}
            {loading && (
             <Overlay>
             </Overlay>
             )}
        <Title>Validar correo</Title>
        <Box
        component="form"
        sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="outlined-required"
                label="Correo"
                value={email}
                onChange={(e)=>{setMail(e.target.value)}}
              />
            </Grid>
            <Grid item xs={12}>
              <Button onClick={handleClick} variant="contained" color="primary">
                Validar
              </Button>
            </Grid>
          </Grid>
            
        </Box>
        
        {/* <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
          See more orders
        </Link> */}
      </React.Fragment>
    );
  }
  