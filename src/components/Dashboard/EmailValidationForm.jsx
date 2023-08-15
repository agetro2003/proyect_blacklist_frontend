import * as React from 'react';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Title from './Title';
import { Grid, Button } from '@mui/material';

export default function EmailValidationForm() {
    return (
      <React.Fragment>
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
                defaultValue=""
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
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
  