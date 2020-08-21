import React from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	sideNav: {
		width: "95px",
		height: "100%",
		padding: theme.spacing(1),
		overflow: "hidden",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		[theme.breakpoints.down(768)]: {
			width: "100%",
			height: "68px",
			padding: 0,
		}
	},
	none: {
		[theme.breakpoints.down(768)]: {
			display: "none",
		}
	}, 
	fill: {
		[theme.breakpoints.down(768)]: {
			width: "100%",
			height: "100%",
		}
	}
}));

const SideNav = () => {
	const classes = useStyles();

	return (
		<React.Fragment>
			<Box className={`${classes.sideNav} `} >
				<Box className={classes.none} bgcolor="green">
					Here go logo
				</Box>
				<Box className={classes.fill} bgcolor="green">
					Here go options
				</Box>
				<Box className={classes.none} bgcolor="green">
					here go source code
				</Box>
			</Box>
		</React.Fragment>
	)
}

export default SideNav
