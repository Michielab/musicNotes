import React from 'react';

/* Import MaterialUI components */
import { withStyles, WithStyles, createStyles, Theme } from '@material-ui/core';

const styles = (theme: Theme) =>
  createStyles({
    ellipse: { cursor: 'pointer'  }
  });

interface NoteProps extends WithStyles<typeof styles> {
  cx: number
  cy: number
  line: boolean
  onClick: (event: React.MouseEvent<SVGEllipseElement, MouseEvent>) => void;
}

function Note(props: NoteProps) {
  const { classes, cx, cy, line, onClick } = props;
  return (
    <svg>
      <ellipse
        cx={cx}
        cy={cy}
        rx="15"
        ry="10"
        stroke="black"
        fill="transparent"
        strokeWidth="3"
        className={classes.ellipse}
        onClick={onClick}
      />
      {line === true && (
        <line
          x1={cx - 20}
          y1={cy}
          x2={cx + 20}
          y2={cy}
          strokeWidth="3"
          stroke="black"
        />
      )}
    </svg>
  );
}

export default withStyles(styles)(Note);
