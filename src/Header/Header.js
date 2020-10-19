import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: '#fff',
    height: 220,
    backgroundImage: "url(" + "https://gstatic.com/classroom/themes/img_reachout.jpg" + ")"
  },

}));


export default function Header() {
  const classes = useStyles();

    return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs>
          <Paper></Paper>
        </Grid>
        <Grid item xs={7}>
          <Paper className={classes.paper}>
            <Grid container spacing={1}>
              <Typography variant="h2">Português turma 01</Typography>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper></Paper>
        </Grid>
      </Grid>
    </div>
  );
}
