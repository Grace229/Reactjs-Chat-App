import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import Post from './Post'
const useStyles = makeStyles(theme => ({
   container:{
       paddingTop: theme.spacing(10)
   }
}))
const MainFeed = () => {
    const classes = useStyles()
    return (
        <Container className={classes.container}>
            <Post />
            <Post />
            <Post />
            <Post />
        </Container>
    )
}

export default MainFeed
