import React from 'react';
import {
  withStyles,
  WithStyles,
  createStyles,
  Theme,
  Typography
} from '@material-ui/core';

/* Import state */
import { useStateValue } from 'contextProvider/contextProvider';

const styles = (theme: Theme) =>
  createStyles({
    '@keyframes addPoint': {
      '0%': { transform: 'translateY(-10px)' },
      '100%': { transform: 'translateY(20px)' }
    },
    '@keyframes deductPoint': {
      '0%': { transform: 'translateY(20px)' },
      '100%': { transform: 'translateY(-20px)' }
    },
    score: {
      color: theme.palette.primary.contrastText,
      width: '100px',
      left: 0,
      right: 0,
      position: 'absolute',
      top: '20%',
      margin: '0 auto',
      textAlign: 'center',
      fontSize: '1.5em',
      [theme.breakpoints.only('xs')]: {
        top: '15%',
        display: 'flex',
        alignItems: 'center',
        color: theme.palette.primary.contrastText,
        '@media (orientation: landscape)': {
          color: theme.palette.primary.main,
          top: 40,
        },
      },
      [theme.breakpoints.only('sm')]: {
        top: '20%',
        display: 'flex',
        alignItems: 'center',
        color: theme.palette.primary.contrastText,
        '@media (orientation: landscape)': {
          color: theme.palette.primary.main,
          top: 40,
        },
      },
    },
    scoreTitle: {
      color: theme.palette.primary.contrastText,
      [theme.breakpoints.only('xs')]: {
        marginRight: 10,
        color: theme.palette.primary.contrastText,
        '@media (orientation: landscape)': {
          color: theme.palette.primary.main
        },
      },
      [theme.breakpoints.only('sm')]: {
        marginRight: 10,
        color: theme.palette.primary.contrastText,
        '@media (orientation: landscape)': {
          color: theme.palette.primary.main
        },
      },
    },
    scores: {
      fontSize: '0.9em',
      marginTop: '10px',
      color: theme.palette.primary.contrastText,
      [theme.breakpoints.only('xs')]: {
        marginTop: 0,
        '@media (orientation: landscape)': {
          color: theme.palette.primary.main
        },
      },
      [theme.breakpoints.only('sm')]: {
        marginTop: 0,
        '@media (orientation: landscape)': {
          color: theme.palette.primary.main
        },
      },
      
    },
    addPoints: {
      // color: '#2FD566',
      color: theme.palette.secondary.main,
      position: 'absolute',
      top: '30px',
      left: '50px',
      fontSize: '25px',
      display: 'inline-block',
      animation: 'addPoint 2s infinite'
    },
    deductPoints: {
      color: theme.palette.error.main,
      position: 'absolute',
      top: '30px',
      left: '50px',
      fontSize: '25px',
      display: 'inline-block',
      animation: 'deductPoint 2s infinite'
    }
  });

interface ScoreProps extends WithStyles<typeof styles> {}

function Score(props: ScoreProps) {
  const [{ score }] = useStateValue();
  const { classes } = props;

  return (
    <div className={classes.score}>
      <Typography variant="title" classes={{ root: classes.scoreTitle }}>
        Score
      </Typography>
      <Typography variant="title" classes={{ root: classes.scores }}>
        {score}
      </Typography>
    </div>
  );
}

export default withStyles(styles)(Score);
