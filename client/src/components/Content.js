import React from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	content: {
		background: "#5CDB95",
		width: "100%",
		height: "100%"
	},
}));

const Content = () => {
	const classes = useStyles();

	return (
		<React.Fragment>
			<Box className={`${classes.content}`}>
				Here is the page contents
        </Box>
		</React.Fragment>
	)
}

export default Content
