import React from "react"
import { AppBar, Button, Container, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LoginDialog from "./dialogs/LoginDialog"
import RegistrationDialog from "./dialogs/RegistrationDialog";

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
    loginDialogTitle: {
        paddingBottom: theme.spacing(0)
    }
}))


function Navbar() {

    const classes = useStyles();

    return (
        <AppBar
            color='white'
            position="fixed">
            <Container fixed>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>OkieDokie!</Typography>
                    <LoginDialog />
                    <RegistrationDialog />
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar