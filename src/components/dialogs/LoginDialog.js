import React from "react"
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
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
    loginDialogTitle: {
        paddingBottom: theme.spacing(0)
    }
}))

function LoginDialog() {


    const [openLogin, setOpenLogin] = React.useState(false)

    const handleClose = () => setOpenLogin(false)

    const handleClickLoginOpen = () => setOpenLogin(true)

    const classes = useStyles();

    return (
        <>
            <Box>
                <Button color="inherit" variant="outlined" className={classes.button} onClick={handleClickLoginOpen}><span className={classes.buttonText}>Войти</span></Button>
            </Box>
            <Dialog open={openLogin} onClose={handleClose} aria-labelledby="form-dialog-title" className={classes.loginDialogTitle}>
                <DialogTitle id="form-dialog-title">
                    Вход в аккаунт
                            </DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
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
                    <DialogContentText id="form-dialog-title" className={classes.forgotPassword}>
                        Забыли пароль?
                                </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose} color="secondary" variant="contained">Войти</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default LoginDialog