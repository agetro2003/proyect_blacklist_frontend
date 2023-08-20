import { useState } from 'react';
import { TextField, TextareaAutosize, Button, Grid } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Title from './Title';

export default function SupportForm() {
  const [motivo, setMotivo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [fechaSoporte, setFechaSoporte] = useState(null);

  const agendarReunion = (event) => {
    event.preventDefault();
    // Lógica para enviar el formulario
  };

  return (
    <form onSubmit={agendarReunion}>
      <Title>Soporte</Title>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Motivo"
            value={motivo}
            onChange={(event) => setMotivo(event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextareaAutosize
            required
            minRows={3}
            fullWidth
            placeholder="Descripción"
            value={descripcion}
            onChange={(event) => setDescripcion(event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateTimePicker']}>
                <DateTimePicker label="Fecha de reunión" value={fechaSoporte} />
                </DemoContainer>
            </LocalizationProvider>
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Enviar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
