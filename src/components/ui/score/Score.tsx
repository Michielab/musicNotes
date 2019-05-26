import React, { useEffect, useState, useRef } from 'react';
import {
  withStyles,
  WithStyles,
  createStyles,
  Theme,
  Fade,
  Typography
} from '@material-ui/core';

/* Import state */
import { useStateValue } from 'contextProvider/contextProvider';

/* Import hooks */
import usePrevious from 'components/hooks/UsePrevious';

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
      top: '150px',
      margin: '0 auto',
      textAlign: 'center',
      fontSize: '1.5em',
      [theme.breakpoints.only('xs')]: {
        top: 25,
        display: 'flex',
        alignItems: 'center'
      }
    },
    scoreTitle: {
      color: theme.palette.primary.contrastText,
      [theme.breakpoints.only('xs')]: {
        marginRight: 10,
        color: '#787eb1'
      }
    },
    scores: {
      fontSize: '0.9em',
      marginTop: '10px',
      color: theme.palette.primary.contrastText,
      [theme.breakpoints.only('xs')]: {
        marginTop: 0,
        color: '#787eb1'
      }
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
  let [differentScores, setFadeIn] = useState(false);
  const [{ score }] = useStateValue();
  const prevScore: any = usePrevious(score);
  const { classes } = props;

  differentScores = score !== prevScore ? true : false;

  function toggleFadeInt() {
    setFadeIn(false);
    differentScores = false;
  }

  /* hook to get the previous state */

  // useEffect(() => {
  //   score !== prevScore && toggleFadeInt();
  // }, [score]);

  const points = score - prevScore;
  const add = points > 0 ? true : false;

  //
  console.log('score', score, prevScore);

  return (
    <div className={classes.score}>
      <Typography variant="title" classes={{ root: classes.scoreTitle }}>
        Score
      </Typography>
      <Typography variant="title" classes={{ root: classes.scores }}>
        {score}
      </Typography>
      {/* {fadeIn && ( */}
      {/* <Fade
          in={differentScores}
          timeout={{ enter: 500, exit: 1500 }}
          onEntered={toggleFadeInt}
          unmountOnExit={true}
        >
          <Typography
            variant="body1"
            className={add ? classes.addPoints : classes.deductPoints}
          >
            {add && '+'}
            {points}
          </Typography>
        </Fade> */}
      {/* )} */}
    </div>
  );
}

export default withStyles(styles)(Score);
