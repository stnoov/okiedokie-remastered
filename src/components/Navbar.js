import { AppBar, Box, Button, Container, Toolbar, Typography } from "@material-ui/core";
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
            <Box>
              <Button color="inherit" variant="outlined" className={classes.button}><span className={classes.buttonText}>Войти</span></Button>
            </Box>
            <Button color="secondary" variant="contained" className={classes.button}><span className={classes.buttonText}>Зарегистрироваться</span></Button>
          </Toolbar>
        </Container>
      </AppBar>
    )
}

export default Navbar