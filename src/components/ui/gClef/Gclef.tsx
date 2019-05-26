import React from 'react';

/* Import MaterialUI components */
import { withStyles, WithStyles, createStyles, Theme } from '@material-ui/core';

/* Import image */
import Gsleutel from 'images/Gsleutel.jpg'

const styles = (theme: Theme) =>
  createStyles({
    image: { width: 170 ,
      [theme.breakpoints.only('xs')]: {
        x: -40
      }
    },
    
  });

interface GclefProps extends WithStyles<typeof styles> {
  height: number
}

function Gclef(props: GclefProps) {
  const { classes, height } = props;
  return (
    <image
      href={Gsleutel}
      x="0"
      y="0"
      className={classes.image}
      style={{ height: height}}
    />
  );
}

export default withStyles(styles)(Gclef);
