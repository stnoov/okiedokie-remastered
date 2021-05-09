import { Button, Container, Typography, Paper, Grid } from "@material-ui/core";
import Navbar from "./components/Navbar"
import './App.css';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1
  },
  mainPaper: {
    position: "relative",
    color: theme.palette.common.black,
    marginBottom: theme.spacing(4),
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  mainContent: {
    padding: theme.spacing(9),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1),
      paddingTop: theme.spacing(9)
    }
  },
  mainDescription: {
    listStyleType: "none",
    textAlign: "justify",
    padding: 0
  },
  learnMoreBtn: {
    marginTop: theme.spacing(3)
  },
  mainDescriptionItem: {
    marginBottom: theme.spacing(1)
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

function App() {

  const classes = useStyles();

  return (
    <>
      <Navbar /> 

      <main>
        <Paper
          elevation={0}
          className={classes.mainPaper}>
          <Container fixed>
            <Grid container
              justify="center"
              alignContent="center"
              style={{ minHeight: "100vh" }}
            >
              <Grid item md={6} sm={12}>
                <div className={classes.mainContent}>
                  <Typography
                    variant="h2"
                    color="inherit"
                  >
                    OkieDokie!
                </Typography>
                  <Typography
                    variant="h4"
                    color="inherit"
                    gutterBottom
                  >
                    Английский разговорный клуб для детей и подростков
                </Typography>
                  <Button color="secondary" variant="contained" size="large" className={classes.learnMoreBtn}>Узнать больше</Button>
                </div>
              </Grid>
              <Grid item md={6} sm={12}>
                <div className={classes.mainContent}>
                  <ul className={classes.mainDescription}>
                    <li className={classes.mainDescriptionItem}><b>Okie Dokie!</b> – это отличный способ улучшить навыки говорения на английском
                                        языке!
                                    </li>

                    <li className={classes.mainDescriptionItem}><b>Okie Dokie!</b> – это непринужденная дружеская атмосфера, где в игровой форме
                                        мы
                                        поможем
                                        тебе пополнить словарный запас, подсказжем, как правильно строятся английские
                                        предложения и что именно нужно говорить в тех или иных ситуациях.
                                    </li>

                    <li className={classes.mainDescriptionItem}><b>Okie Dokie!</b> – это возможность использования английского языка! Практика
                                        поможет
                                        вам
                                        чувствовать себя более уверенно и комфортно на уроках, экзаменах и реальных
                                        жизненных ситуациях.
                                    </li>
                  </ul>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Paper>
      </main>

    </>
  );
}

export default App;
