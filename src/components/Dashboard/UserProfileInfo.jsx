import { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import Title from './Title';

export default function UserProfileInfo() {
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
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          fullWidth
          label="Nombre"
          value={nombre}
          onChange={(event) => setNombre(event.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          fullWidth
          label="Correo electrónico"
          type="email"
          value={correo}
          onChange={(event) => setCorreo(event.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField id="outlined-search"
          required
          fullWidth
          label="Fecha"
          type="date"
          value={fecha}
          onChange={(event) => setFecha(event.target.value)}
          defaultValue=""
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField 
          required
          fullWidth
          label="Teléfono"
          value={telefono}
          onChange={(event) => setTelefono(event.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          fullWidth
          label="Contraseña actual"
          type="password"
          value={contrasena}
          onChange={(event) => setContrasena(event.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          fullWidth
          label="Repetir contraseña"
          type="password"
          value={repetirContrasena}
          onChange={(event) => setRepetirContrasena(event.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          fullWidth
          label="API Key"
          value={apiKey}
          onChange={(event) => setApiKey(event.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          fullWidth
          label="Plan"
          value={plan}
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
