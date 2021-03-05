import React, { useState } from 'react';

import { loginUser } from "../utils/authentication"

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
    backgroundColor: '#000',
  },
  link: {
    marginTop: theme.spacing.unit * 2,
  },
});

function Login (props) {
    const { classes } = props;

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const loginHandler = () => {
      let userData = {
        username: email,
        password: password
      }
      console.log(userData)
      loginUser(userData, props.history);
    }

        return(
            <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
       
        <Typography component="h1" variant="h5">
          Login Page
        </Typography>
        <form className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Username</InputLabel>
            <Input id="email" name="email" autoComplete="email" autoFocus onChange={(e) => setEmail(e.target.value)}/>
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input name="password" type="password" id="password" autoComplete="current-password" onChange={(e) => setPassword(e.target.value)}/>
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={loginHandler}
          >
            Sign in
          </Button>
         
        </form>
        <Link className={classes.link} component={RouterLink} to="register">
          Register</Link>
      </Paper>
    </main>
        )

}
export default withStyles(styles)(Login);