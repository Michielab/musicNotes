import React from 'react';

/* Import MaterialUI components*/
import {
  withStyles,
  WithStyles,
  createStyles,
  Theme,
  Button as ButtonMaterialUi,
} from '@material-ui/core';

/* Import MaterialUI props*/
import { ButtonProps as ButtonPropsMaterialUi } from '@material-ui/core/Button';

const styles = (theme: Theme) =>
  createStyles({
    button: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      border: `${theme.palette.primary.contrastText} solid ${theme.spacing.unit / 8}px`,
      borderRadius: `${theme.spacing.unit * 3.5}%`,
      // height: '50px',
      // width: '50px',
      webkitBoxShadow: '4px 7px 10px 3px rgba(0,0,0,0.75)',
      mozBoxShadow: '4px 7px 10px 3px rgba(0,0,0,0.75)',
      boxShadow: '4px 7px 10px 3px rgba(0,0,0,0.75)',
      margin: '0 10px',
      '&:hover': {
        backgroundColor: theme.palette.primary.main
      },
      '&:disabled': {
        color: theme.palette.primary.contrastText,
        cursor: 'pointer',
        pointerEvents: 'unset',
        '&:hover': {
          backgroundColor: theme.palette.primary.main
        }
      }
    },
    rippleCorrect: {
      color: 'green !important'
    },
    rippleWrong: {
      color: 'red !important'
    }
  });

interface ButtonProps extends WithStyles {
  currentNote: { name: string };
  buttonDisabled: boolean;
  buttonProps?: ButtonPropsMaterialUi
}

function Button(props: ButtonProps) {
  const { classes, currentNote, buttonDisabled } = props;

  return (
    <ButtonMaterialUi
      disabled={buttonDisabled}
      draggable={true}
      classes={{ root: classes.button }}
      // TouchRippleProps={{
      //   className:
      //     currentNote.name === note.name
      //       ? classes.rippleCorrect
      //       : classes.rippleWrong
      // }}
      // onClick={() => check(note.name)}
      centerRipple={true}
      // key={index}
    >
      {/* {note.name} */}
      hi
    </ButtonMaterialUi>
  );
}

export default withStyles(styles)(Button)
