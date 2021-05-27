import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
// Commit 7
import Divider from '@material-ui/core/Divider';
// Commit 10
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    height: '100%'
  },
  paper: {
    width: '150px',
    height: 'max-content',
    margin: 'auto',
    padding: theme.spacing(4)
  },
  text: {
    margin: 'auto'
  }
}));

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Paper elevation={5} className={classes.paper}>
          {/* Commit 4 */}
      <Avatar alt="python">Py</Avatar>
          {/* Commit 3 */}
      <Button variant="contained" color="secondary">
          Нажми на эту кнопку
        </Button>
        {/* Commit 5 */}
        <Typography id="discrete-slider" color="primary" gutterBottom>
          Увеличивай громкость
      </Typography>
        <Grid container spacing={2}>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
          </Grid>
          <Grid item>
            <VolumeUp />
          </Grid>
        </Grid>
        {/* Commit 4 */}
        <Avatar className={classes.orange}></Avatar>
        {/* Commit 2 */}
        <TextField id="standard-basic" label="Имя" />
      </Paper>
      {/* Commit 7 */}
      <Divider />
      {/* Commit 8 */}
       <Button color="primary" variant="contained" fullWidth="true"> {/*Commit 9 */}
          Сюда не нажимай
      </Button>
      {/*Commit 9 */}
      <Divider />
        {/* Commit 5 */}
      <form className={classes.container} noValidate>
      <TextField
        id="date"
        // Commit 6
        label="Текущая дата"
        type="date"
        defaultValue="1999-05-10"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
    {/* Commit 10 */}
    <Link href="#" onClick={preventDefault}>
    Link
  </Link>
    </div>
  );
}

export default App;