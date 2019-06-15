import React, { ReactNode } from 'react';

/* Import MaterialUI components*/
import { withStyles, WithStyles, createStyles, Theme } from '@material-ui/core';
import Gclef from 'components/ui/gClef/Gclef';
import Gsleutel from 'images/Gsleutel.jpg';
const styles = (theme: Theme) =>
  createStyles({
    image: {
      width: '170px',
      [theme.breakpoints.only('xs')]: {
        x: -40
      }
    },
    stave: { width: '100%', height: '100%', minHeight: '290px' }
  });

interface StaveUIProps extends WithStyles<typeof styles> {
  children: ReactNode;
  height: number;
  width: number;
}

function StaveUI(props: StaveUIProps) {
  const { classes, height, width } = props;
  let xPosition = width <= 600 ? -40 : 0;
  return (
    <svg className={classes.stave}>
      <image
        xlinkHref={Gsleutel}
        x={xPosition}
        y="0"
        height={height}
        width="170px"
        className={classes.image}
      />
      {props.children}
    </svg>
  );
}

export default withStyles(styles)(StaveUI);
