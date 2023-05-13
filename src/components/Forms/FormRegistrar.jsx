import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const FormRegistrar = ({ credentials, setCredentials, showViewLogin }) => {

    const [msgPassword, setMsgPassword] = useState({ status: false, content: "coincide" });

    useEffect(() => {
        if (credentials.password2 != credentials.password) {
            msgPassword.status = true;
            msgPassword.content = "Las contraseñas no coinciden";
        } else {
            msgPassword.status = false;
            msgPassword.content = "coincide";
        }

    }, [credentials.password2, credentials.password])

    

    return (
        <div>
            <TextField
                error={msgPassword.status}
                autoFocus
                margin="dense"
                id="Password2"
                label="repetir contraseña"
                type="password"
                fullWidth
                variant="standard"
                onChange={setCredentials}
                name="password2"
                value={credentials.password2}
                helperText={msgPassword.content}
            />

            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="name"
                type="name"
                fullWidth
                variant="standard"
                onChange={setCredentials}
                name="name"
                value={credentials.name}
            />

            <TextField
                autoFocus
                margin="dense"
                id="last_name"
                label="last_name"
                type="last_name"
                fullWidth
                variant="standard"
                onChange={setCredentials}
                name="last_name"
                value={credentials.last_name}
            />

            <Button variant="outlined" size="medium" onClick={showViewLogin}>
                Regresar
            </Button>

        </div>
    );
}
export default FormRegistrar;
