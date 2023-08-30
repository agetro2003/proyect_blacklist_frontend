import { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import Title from './Title';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Alert from '../Alert/Alert';
import Overlay from '../Overlay/Overlay';
import API_AXIOS from '../../../settings/AxiosInstance';
import endpointList from '../../../settings/endpoints';
export default function UserProfileInfo( {user} ) {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState(localStorage.getItem('userEmail').slice(1, localStorage.getItem('userEmail').length -1));
  const [fecha, setFecha] = useState('');
  const [telefono, setTelefono] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [repetirContrasena, setRepetirContrasena] = useState('');
  const [apiKey, setApiKey] = useState('');
  const plan = 'Plan básico';
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState({
  active:false,
  title: "",
  content: ""
}) 
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleSubmit =  async (event) => {
    event.preventDefault();

    if (contrasena != repetirContrasena) {
      setAlert({
        active:true,
        title: "error",
        content: "Las contraseñas no coinciden"
    })
    } else {
      setLoading(true)
      console.log(repetirContrasena)
      try {
  
        const data = {
          mail_usuario: correo,
    new_mail_usuario: correo,
    name_usuario: user.name_user,
    tlfn_usuario: user.tlfn_usuario,
    birth_usuario: user.birth_usuario,
    pswd_usuario: contrasena,
    new_pswd_usuario:contrasena,
    id_plan: user.info_plan.id_plan
        }
        const res = await API_AXIOS.put(endpointList.upgrade_profile, data)
        setLoading(false)
        console.log(res)
        setAlert({
          active:true,
          title: "Mensaje",
          content: `Contraseña actualizada correctamente`
      })
  
      } catch (error) {
        setLoading(false)
        setAlert({
          active:true,
          title: "error",
          content: error.data.message
      })
      }
    }
   
    // Lógica para enviar el formulario
  };
  

  return (
    <form onSubmit={handleSubmit}>
      {alert.active && (
                <Alert open={alert.active} setOpen={setAlert} title={alert.title} content={alert.content}></Alert>
            )}
            {loading && (
             <Overlay>
             </Overlay>
             )}
      <Title>Perfil</Title>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField
          InputProps={{ readOnly: true }}

          
          fullWidth
          label="Nombre"
          value={user.name_user}
          onChange={(event) => setNombre(event.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          InputProps={{ readOnly: true }}

          
          fullWidth
          label="Correo electrónico"
          type="email"
          value={correo}
          onChange={(event) => setCorreo(event.target.value)}
        />
      </Grid>
      {/*<Grid item xs={12} sm={6}>
        <TextField id="outlined-search"
        disabled
          required
          fullWidth
          label="Fecha"
          type="date"
          value={fecha}
          onChange={(event) => setFecha(event.target.value)}
        />
  </Grid>*/}
      <Grid item xs={12} sm={6}>
        <TextField 
        InputProps={{ readOnly: true }}

          required
          fullWidth
          label="Teléfono"
          value={user.tlfn_usuario}
          onChange={(event) => setTelefono(event.target.value)}
        />
      </Grid>
     {/* <Grid item xs={12} sm={6}>
        <TextField
          required
          fullWidth
          label="Contraseña actual"
          type="password"
          value={contrasena}
          onChange={(event) => setContrasena(event.target.value)}
        />
</Grid>*/}
      {/*<Grid item xs={12} sm={6}>
        <TextField
          required
          fullWidth
          label="Repetir contraseña"
          type="password"
          value={repetirContrasena}
          onChange={(event) => setRepetirContrasena(event.target.value)}
        />
</Grid>*/}
      <Grid item xs={12} sm={6}>
        <TextField
         InputProps={{ readOnly: true }}
          
          fullWidth
          label="API Key"
          value={user.api_key}
          onChange={(event) => setApiKey(event.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          
          fullWidth
          label="Plan"
          value={user.info_plan.desc_plan}
          InputProps={{ readOnly: true }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField       
          fullWidth
          label="Consultas realizadas"
          value={user.requests}
          InputProps={{ readOnly: true }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField       
          fullWidth
          label="Limite de consultas"
          value={user.info_plan.limit_plan}
          InputProps={{ readOnly: true }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField       
          fullWidth
          label="Costo del plan"
          value={user.info_plan.cost_plan + "$"}
          InputProps={{ readOnly: true }}
        />
      </Grid>
      </Grid>

      <Title>Cambiar contraseña</Title>
      <Grid container spacing={2}>

    { /* <Grid item xs={12} sm={6}>
      <OutlinedInput
      fullWidth
            id="outlined-adornment-password"
            label="p"
          value={contrasena}
onChange={(e)=>{
  setContrasena(e.target.value)
}} 
type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
              
          />
        <TextField       
          fullWidth
          label="Nueva Contraseña"
          value={contrasena}
onChange={(e)=>{
  setContrasena(e.target.value)
}}        />
      </Grid>*/}
            <Grid item xs={12} sm={6}>
            <TextField       
          fullWidth
          label="Nueva Contraseña"
          value={contrasena}
onChange={(e)=>{
  setContrasena(e.target.value)
}}        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField       
          fullWidth
          label="Repetir Contraseña"
          value={repetirContrasena}
          onChange={(e)=>{
            setRepetirContrasena(e.target.value)
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <Button type="submit" variant="contained" color="primary">
          Guardar
        </Button>
      </Grid>
    </Grid>
    </form>
  );
}
