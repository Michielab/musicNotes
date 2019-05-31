import React, { useState } from 'react';
import { withStyles, WithStyles, createStyles, Theme } from '@material-ui/core';

/* Import notes  */
import { notes } from 'helpers/Notes';

/* Import components  */
import Button from 'components/ui/button/Button';
import { Actions } from 'actions/Actions';

/* Import hooks */
import { useStateValue } from 'contextProvider/contextProvider';

const styles = (theme: Theme) =>
  createStyles({
    container: {
      marginTop: 30,
      [theme.breakpoints.only('xs')]: {
        marginTop: 10,
      }
    },
    rippleCorrect: {
      color: `${theme.palette.secondary.main} !important`
    },
    rippleWrong: {
      color: `${theme.palette.error.main} !important`
    },
    disabled: {
      opacity: 0.6
    }
  });

interface ButtonBarProps extends WithStyles<typeof styles> {}

function ButtonBar(props: ButtonBarProps) {
  const [buttonDisabled, toggleButtonDisabled] = useState(false);
  const [{ number, score }, dispatch] = useStateValue();
  const { classes } = props;

  /* 
  - calls function disableButtons
  - setTimeout function that after 750ms: 
    - dispatches RANDOM_NUMBER and CORRECT_ANSWER
    - enables buttons
  */
  function correctAnswer() {
    disableButtons();
    setTimeout(() => {
      dispatch({
        type: Actions.RANDOM_NUMBER,
        notesLength: notes['fKeySimple'].length
      });
      dispatch({ type: Actions.CORRECT_ANSWER });
      toggleButtonDisabled(false);
    }, 750);
  }

  /* 
  - setTimeout function that after 250ms: 
    - sets the buttons to disabled
  */
  function disableButtons() {
    setTimeout(() => {
      toggleButtonDisabled(true);
    }, 250);
  }

  /* 
  - calls function disableButtons
  - setTimeout function that after 750ms: 
    - dispatches WRONG_ANSWER
    - enables buttons
  */
  function wrongAnswer() {
    disableButtons();
    setTimeout(() => {
     score > 0 && dispatch({ type: Actions.WRONG_ANSWER });
      toggleButtonDisabled(false);
    }, 750);
  }

  /* 
  - checks answer
  - calls either correctAnswer or wrongAnswer
  */
  function checkAnswer(answer: string) {
    notes['fKeySimple'][number].name === answer
      ? correctAnswer()
      : wrongAnswer();
  }

  return (
    <div
      className={[classes.container, buttonDisabled && classes.disabled].join(
        ' '
      )}
    >
      {notes['fKeySimple'].map(
        (note, index: number) =>
          index < 7 && (
            <Button
              key={note.name + index}
              buttonProps={{
                onClick: () => {checkAnswer(note.name);       dispatch({
                  type: Actions.TOGGLE_PLAY
                });},
                TouchRippleProps: {
                  className:
                    notes['fKeySimple'][number].name === note.name
                      ? classes.rippleCorrect
                      : classes.rippleWrong
                },
                disabled: buttonDisabled,
                centerRipple: true
              }}
            >
              {note.name}
              {console.log(notes['fKeySimple'][number].name === note.name)}
            </Button>
          )
      )}
    </div>
  );
}

export default withStyles(styles)(ButtonBar);
