import React from 'react'
import { Box, Avatar, Grid, Typography, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import GitHubIcon from '@material-ui/icons/GitHub';

// theme colors
const bgDarkest = "#05386B";
const bgDark = "#379683";
const bgBackground = "#5CDB95";
const bgLighter = "#8EE4AF";
const bgText = "#EDF5E1";

const useStyles = makeStyles((theme) => ({
	sideNav: {
		width: "95px",
		height: "100%",
		overflow: "hidden",
		position: "relative",
		background: bgDarkest,
		paddingBottom: theme.spacing(4),
		[theme.breakpoints.down(768)]: {
			width: "100%",
			height: "68px",
			padding: 0,
		}
	},
	none: {
		[theme.breakpoints.down(768)]: {
			display: "none!important",
		}
	},
	options: {
		position: "absolute",
		transform: "translate(0, -50%)",
		top: "50%",
		display: "flex",
		flexDirection: "column",
		[theme.breakpoints.down(768)]: {
			width: "100%",
			height: "100%",
		}
	},
	logoBox: {
		width: "100%",
		display: "flex",
		justifyContent: "center",
	},
	logo: {
		width: "60px",
		height: "60px",
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2),
	},
	sideNavFont: {
		fontSize: "11px",
		color: bgText
	},
	source: {
		position: "absolute",
		top: "100%",
		transform: `translate(0, -100%) translate(0, -32px)`,
		width: "100%",
		display: "inline-flex",
		verticalAlign: "middle",
		paddingBottom: theme.spacing(2),
		paddingTop: theme.spacing(2),
		"&:hover": {
			background: bgBackground,
			"& $githubIcon": {
				color: bgDarkest
			},
			"& $githubText": {
				color: bgDark,
				textShadow: `0px 0px 2px ${bgDark}`
			}
		}
	},
	githubIcon: {
		color: bgBackground,
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		transition: ".1s",
		transitionTimingFunction: "ease-in-out"
	},
	githubText: {
		marginTop: "auto",
		marginBottom: "auto",
		fontSize: "11px",
		color: bgText,
		fontWeight: 600,
		transition: ".1s",
		transitionTimingFunction: "ease-in-out"
	}
}));

const SideNav = () => {
	const classes = useStyles();

	return (
		<React.Fragment>
			<Box className={`${classes.sideNav} `} >
				{/* sidenav logo */}
				<Box className={`${classes.logoBox} ${classes.none}`}>
					<Avatar className={classes.logo} alt="Spotitracks Logo" src="spotitrack.png" />
				</Box>

				{/* main sidenav */}
				<Box className={`${classes.options}`} bgcolor="green">
					Here go options
				</Box>

				{/* source code nav */}
				<Link href="https://github.com/aaronli39" target="_blank">
					<Box className={`${classes.none} ${classes.source}`}>
						<GitHubIcon className={classes.githubIcon} fontSize="small" />
						<Box className={classes.githubText}>Source</Box>
					</Box>
				</Link>

			</Box>
		</React.Fragment>
	)
}

export default SideNav
