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
    }
  });

interface ContainerProps extends WithStyles {
  children?: ReactNode;
  paperProps?: PaperPropsMaterialUi;
  type: 'root' | 'columnFlex';
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
