import React from 'react';

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

interface ModalProps {
    title: string,
    children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({title, children}: ModalProps): React.ReactElement => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Войти</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {title}
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Почта"
                    type="email"
                    fullWidth
                />
                <TextField
                    margin="dense"
                    id="name"
                    label="Пароль"
                    type="password"
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Отмена
                            </Button>
                <Button onClick={handleClose} color="primary">
                    Войти
                            </Button>
            </DialogActions>
        </Dialog>
    );
}