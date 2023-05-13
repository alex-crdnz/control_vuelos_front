import React, { useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import UserService from '../../services/UserService';

const NavBar = (props) => {
  const user = (localStorage.getItem("user"));
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button variant="contained" color="primary" href="/vuelos">Vuelos</Button>
          <Button variant="contained" color="primary" href="/aviones">Aviones</Button>
          <Button variant="contained" color="primary" href="/destinos">Destinos</Button>
          <Button variant="contained" color="primary" href="/asientos">Asientos</Button>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Control De Vuelos
          </Typography>
          <Button color="inherit" href="/home">{user}</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;