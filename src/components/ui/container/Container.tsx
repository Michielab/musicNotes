import React, { ReactNode } from 'react';

/* Import MaterialUI components*/
import {
  withStyles,
  WithStyles,
  createStyles,
  Theme,
  Paper as PaperMaterialUi
} from '@material-ui/core';

/* Import MaterialUI props*/
import { PaperProps as PaperPropsMaterialUi } from '@material-ui/core/Paper';

const styles = (theme: Theme) =>
  createStyles({
    base: { backgroundColor: theme.palette.primary.dark },
    root: {
      height: '100vh'
    },
    columnFlex: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    stave: {
        backgroundColor: 'white',
        height: '40%',
        width: '50%',
        minWidth: '320px',
        minHeight: ' 300px',
        maxWidth: '650px',
        maxHeight: '400px',
        webkitBoxShadow: '4px 7px 10px 3px rgba(0,0,0,0.75)',
        mozBoxShadow: '4px 7px 10px 3px rgba(0,0,0,0.75)',
        boxShadow: '4px 7px 10px 3px rgba(0,0,0,0.75)',
        borderRadius: '5px'
      },
  });

interface ContainerProps extends WithStyles {
  children?: ReactNode;
  paperProps?: PaperPropsMaterialUi;
  type: 'root' | 'columnFlex' | 'stave';
}

function Container(props: ContainerProps) {
  const { classes, paperProps, type } = props;

  return (
    <PaperMaterialUi
      classes={{ root: [classes.base, classes.Paper, classes[type]].join(' ') }}
      {...paperProps}
    >
      {props.children}
    </PaperMaterialUi>
  );
}

export default withStyles(styles)(Container);
