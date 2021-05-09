import React from "react"
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1
    },
    button: {
        margin: theme.spacing(1),
        [theme.breakpoints.down("sm")]: {
            minWidth: 32,
            paddingLeft: 8,
            paddingRight: 8,
            "& .MuiButton-startIcon": {
                margin: 0
            }
        }
    },
    buttonText: {
        [theme.breakpoints.down("sm")]: {
            fontSize: "10px"
        }
    },
    forgotPassword: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(0),
        color: theme.palette.primary.light,
        cursor: "pointer"
    },
    registrationDialogTitle: {
        paddingBottom: theme.spacing(0)
    }
}))

function RegistrationDialog() {


    const [openRegister, setOpenRegister] = React.useState(false)

    const handleClose = () => setOpenRegister(false)

    const handleClickRegister = () => setOpenRegister(true)

    const classes = useStyles();

    return (
        <>
            <Button color="secondary" variant="contained" className={classes.button} onClick={handleClickRegister}><span className={classes.buttonText}>Зарегистрироваться</span></Button>
            <Dialog open={openRegister} onClose={handleClose} aria-labelledby="form-dialog-title" className={classes.registrationDialogTitle}>
                <DialogTitle id="form-dialog-title">
                    Регистрация
                </DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Имя"
                        type="text"
                        color="secondary"
                        fullWidth
                    >
                    </TextField>
                    <TextField
                        margin="dense"
                        id="email"
                        label="Почта"
                        type="email"
                        color="secondary"
                        fullWidth
                    >
                    </TextField>
                    <TextField
                        margin="dense"
                        color="secondary"
                        id="password"
                        label="Пароль"
                        type="password"
                        fullWidth
                    >
                    </TextField>
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose} color="secondary" variant="contained">Зарегистрироваться</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default RegistrationDialog