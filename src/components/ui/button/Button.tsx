import React, { ReactNode } from 'react';

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
      webkitBoxShadow: '4px 7px 10px 3px rgba(0,0,0,0.75)',
      mozBoxShadow: '4px 7px 10px 3px rgba(0,0,0,0.75)',
      boxShadow: '4px 7px 10px 3px rgba(0,0,0,0.75)',
      margin: '0 10px',
      height: `${theme.spacing.unit * 6.25}px`,
      width: `${theme.spacing.unit * 6.25}px`,
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
      },
      [theme.breakpoints.only('xs')]: {
        height: `${theme.spacing.unit * 4.375}px`,
        width: `${theme.spacing.unit * 4.375}px`,
        margin: '0 5px',
        minWidth: `${theme.spacing.unit * 4.375}px`,
        padding: 0
      },  
      [theme.breakpoints.only('sm')]: {
        height: `${theme.spacing.unit * 4.375}px`,
        width: `${theme.spacing.unit * 4.375}px`,
        margin: '0 5px',
        minWidth: `${theme.spacing.unit * 4.375}px`,
        padding: 0
      },  
    },
  });

interface ButtonProps extends WithStyles {
  children?: ReactNode;
  buttonProps?: ButtonPropsMaterialUi
}

function Button(props: ButtonProps) {
  const { classes, buttonProps } = props;

  return (
    <ButtonMaterialUi
      classes={{ root: classes.button }}
      centerRipple={true}
      {...buttonProps}
    >
      {props.children}
    </ButtonMaterialUi>
  );
}

export default withStyles(styles)(Button)
