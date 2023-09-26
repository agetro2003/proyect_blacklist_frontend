import { useState } from 'react';
import { TextField, TextareaAutosize, Button, Grid } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Title from './Title';
import Alert from "../Alert/Alert"
import Overlay from "../Overlay/Overlay"
import API_AXIOS from '../../../settings/AxiosInstance';
import endpointList from '../../../settings/endpoints';

export default function SupportForm() {
  const [motivo, setMotivo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [fechaSoporte, setFechaSoporte] = useState('');
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState({
  active:false,
  title: "",
  content: ""
}) 

  const agendarReunion = async(event) => {
    event.preventDefault();
    const date = new Date(fechaSoporte)
  const timeString = date.toLocaleTimeString('en-US', { hour12: false });
  const dateTimeString = date.toISOString().slice(0, 10) + 'T' + timeString;
    let data = {
      event_title: motivo,
      event_desc: descripcion,
      start_date: dateTimeString,
      mail_usuario: localStorage.getItem('userEmail').slice(1, localStorage.getItem('userEmail').length -1)
    }     
     setLoading(true)
    
    try {
      const res = await API_AXIOS.post(endpointList.create_event, data)
      setAlert({
        active:true,
        title: 'Mensaje',
        content: res.data.message
      })
      setLoading(false)
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
    // Lógica para enviar el formulario
  };

  return (
    <form onSubmit={agendarReunion}>
                  {alert.active && (
                <Alert open={alert.active} setOpen={setAlert} title={alert.title} content={alert.content}></Alert>
            )}
            {loading && (
             <Overlay>
             </Overlay>
             )}
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
          {/*<TextareaAutosize
            required
            minRows={3}
            fullWidth
            placeholder="Descripción"
            value={descripcion}
            onChange={(event) => setDescripcion(event.target.value)}
          />*/}

<TextField
            sx={
                {
                    width: '100%'
                }
            }
          id="outlined-multiline-static"
          label="Escriba aqui su mensaje*"
          multiline
          rows={4}
          value={descripcion}
          onChange={(e)=>{
            setDescripcion(e.target.value)
          }}
        />
        </Grid>
        <Grid item xs={12}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateTimePicker']}>
                <DateTimePicker label="Fecha de reunión" value={fechaSoporte} onChange={(event) =>{
                  setFechaSoporte(event.$d)
                }}/>
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
