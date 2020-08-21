import React from 'react'
import { Grid, Box, CssBaseline } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import SideNav from './components/SideNav';
import Content from './components/Content';

const useStyles = makeStyles((theme) => ({
  flexContainer: {
    flexDirection: "row",
    height: "100vh",
    [theme.breakpoints.down(768)]: {
      flexDirection: "column-reverse"
    }
  }
}));

const App = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <CssBaseline />

      {/* parent container for entire page */}
      <Box display="flex" className={classes.flexContainer}>
        
        {/* sidenav or bottom nav */}
        <SideNav />

        {/* main content */}
        <Content />
        
      </Box>

    </React.Fragment>
  )
}

export default App
