import React, { useEffect } from 'react';

/* Helper function to get notes  */
import { getNotes } from 'helpers/Notes';

/* Import components  */
import Note from 'components/notes/Note';
import { Actions } from 'actions/Actions';

/* Import hooks */
import { useStateValue } from 'contextProvider/contextProvider';

interface LearnProps {
  middle: number;
  divider: number;
  width: number;
}

function Learn(props: LearnProps) {
  const [{ number }, dispatch] = useStateValue();
  const { middle, divider, width } = props;

  /* Function to get the notes */
  let notes = getNotes(middle, divider, width);

  useEffect(() => {
    dispatch({ type: Actions.RANDOM_NUMBER, notesLength: notes.length });
  }, [dispatch, notes.length]);

  /* Select current note based on the random number */
  let note = notes[number];
  console.log('note', note, number)
  return (
    note &&
    <Note
      cx={note.positionX}
      cy={note.positionY}
      line={note.line}
      onClick={() => {}}
    />
  );
}

export default Learn;
