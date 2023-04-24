import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const Dialogo = ({open, disableBottonPrimary, titulo, showPrimary, showSecundary, textSecundary, secundaryFuntion, primaryFuntion, textPrimary, body}) => {

    return (
        <div>
            <Dialog open={open}>
                <DialogTitle>{titulo}</DialogTitle>
                <DialogContent>
                    {body}
                </DialogContent>
                <DialogActions>
                    {showSecundary &&  <Button onClick={secundaryFuntion}>{textSecundary}</Button>}
                    {showPrimary &&  <Button disabled={disableBottonPrimary} onClick={primaryFuntion}>{textPrimary}</Button>}
                </DialogActions>
            </Dialog>
        </div>
    );
}
export default Dialogo;
