import { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import Title from './Title';

export default function UserProfileInfo( {user} ) {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [fecha, setFecha] = useState('');
  const [telefono, setTelefono] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [repetirContrasena, setRepetirContrasena] = useState('');
  const [apiKey, setApiKey] = useState('');
  const plan = 'Plan básico';

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para enviar el formulario
  };
  

  return (
    <form onSubmit={handleSubmit}>
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
          value={localStorage.getItem('userEmail')}
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
      <Grid item xs={12}>
        <Button type="submit" variant="contained" color="primary">
          Guardar
        </Button>
      </Grid>
    </Grid>
    </form>
  );
}
