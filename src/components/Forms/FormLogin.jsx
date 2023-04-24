import React from 'react';
import TextField from '@mui/material/TextField';


const FormLogin = ({credentials, setCredentials}) => {

  return (
    <div>
      <TextField
        autoFocus
        margin="dense"
        id="user"
        label="email"
        type="text"
        fullWidth
        variant="standard"
        onChange={setCredentials}
        name="user"
        value={credentials.user}
      />
      <TextField
        autoFocus
        margin="dense"
        id="Password"
        label="password"
        type="password"
        fullWidth
        variant="standard"
        onChange={setCredentials}
        name="password"
        value={credentials.password}
      />
    </div>
  );
}
export default FormLogin;
