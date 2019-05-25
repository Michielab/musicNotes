import * as React from 'react';
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
      marginTop: 30
    }
  });

interface ButtonBarProps extends WithStyles<typeof styles> {}

function ButtonBar(props: ButtonBarProps) {
  const [{ number }, dispatch] = useStateValue();
  const { classes } = props;

  function checkAnswer(answer: string) {
    notes['fKeySimple'][number].name === answer
      ?  dispatch({ type: Actions.RANDOM_NUMBER, notesLength:  notes['fKeySimple'].length })
      : console.log('false');
  }

  return (
    <div className={classes.container}>
      {notes['fKeySimple'].map(
        (note, index: number) =>
          index < 7 && (
            <Button
              key={note.name + index}
              buttonProps={{ onClick: () => checkAnswer(note.name) }}
            >
              {note.name}
            </Button>
          )
      )}
    </div>
  );
}

export default withStyles(styles)(ButtonBar);
