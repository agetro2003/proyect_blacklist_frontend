import { Dialog, DialogActions, DialogContent, DialogTitle, DialogContentText, Button } from "@mui/material";

const Alert = ({open, setOpen, title, content}) => {
    
    const handleClose = () => {
        setOpen(false)
    }

    return (
            <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {content}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cerrar</Button>
                </DialogActions>
            </Dialog>
    )
}

export default Alert;