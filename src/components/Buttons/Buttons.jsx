import  React,{useState} from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
const Buttons = ()=>{
    const [nombre, setNombre]=useState("no click")
    const changeName = (e) => {
        setNombre(e.target.value)
    }
    return (
        <Stack spacing={2} direction="row">
            <Button variant="Contained" onClick={changeName}>{nombre}</Button>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={changeName} />
        </Stack>
    );
}
export default Buttons;