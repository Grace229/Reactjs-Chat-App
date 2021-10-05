import React from 'react'
import { Grid, makeStyles } from '@material-ui/core';
import Navbar from './components/Navbar';
import Left from './components/Left';
import MainFeed from './components/MainFeed';
import Right from './components/Right';
import Add from './components/Add'
import AddIcon from '@material-ui/icons/Add'
import { ForumRounded, PeopleOutlineRounded } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({

  left: {
    // backgroundColor: 'red'
  },

  center: {
    // backgroundColor: 'green'
  },

  right: {
   [ theme.breakpoints.down("sm")]:{
     display: 'none'
   }
  }
}))
const App = () => {
  const classes = useStyles()
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid className={classes.left} item sm={2} xs={2}>
          <Left/> 
        </Grid>

        <Grid className={classes.center} item sm={7} xs={10}>
          <MainFeed/>
        </Grid>

        <Grid className={classes.right} item sm={3}>
          <Right/>
        </Grid>
      </Grid>
      <Add Icon={AddIcon} iconName='post' color='secondary' />
      <Add Icon={ForumRounded} iconName='chat' color='primary' />
      <Add Icon={PeopleOutlineRounded} iconName='friends' color='warning' />
    </div>
  )
}

export default App