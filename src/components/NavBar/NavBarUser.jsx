import React, { useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const NavBarUser = (props) => {
  const user = (localStorage.getItem("user"));
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <Button variant="contained" color="primary" href="/inicio">Inicio</Button>
        <Button variant="contained" color="primary" href="/MisReservaciones">Mis Reservaciones</Button>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}}  >
            Vuelos
          </Typography>
          <Button color="inherit" href="/home">{user}</Button >
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBarUser;