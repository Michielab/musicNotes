import React, { ReactNode } from 'react';

/* Import MaterialUI components*/
import { withStyles, WithStyles, createStyles, Theme } from '@material-ui/core';

const styles = (theme: Theme) =>
  createStyles({
    stave: { width: '100%', height: '100%', minHeight: '290px' }
  });

interface StaveUIProps extends WithStyles<typeof styles> {
  children: ReactNode;
}

function StaveUI(props: StaveUIProps) {
  const { classes } = props;
  return <svg className={classes.stave}>{props.children}</svg>;
}

export default withStyles(styles)(StaveUI);
