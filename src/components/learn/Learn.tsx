import React from 'react';

/* Helper function to get notes  */
import { getNotes } from 'helpers/Notes';

/* Import components  */
import Note from 'components/notes/Note';

/* Import hooks */
import UseNextNote from 'components/hooks/UseNextNote';

interface LearnProps {
  middle: number;
  divider: number;
  width: number;
}

function Learn(props: LearnProps) {
  const { middle, divider, width } = props;
  let notes = getNotes(middle, divider, width);
  let number = UseNextNote(notes);
  let note = notes[number];
  return (
    <Note
      cx={note.positionX}
      cy={note.positionY}
      line={note.line}
      onClick={()=>{}}
    />
  );
}

export default Learn;
