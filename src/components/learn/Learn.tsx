import React, { useEffect, useState } from 'react';

/* Helper function to get notes  */
import { getNotes } from 'helpers/Notes';

/* Import components  */
import Note from 'components/notes/Note';

/* Import hooks */

interface LearnProps {
  middle: number;
  divider: number;
  width: number;
}

function Learn(props: LearnProps) {
  const [number, setNumber] = useState(0);
  const [note, setNote] = useState({ positionX: 0, positionY: 0, line: false });
  const { middle, divider, width } = props;

  function getNote() {
    let notes = getNotes(middle, divider, width);
    if (number === 0) {
      let newNumber = Math.floor(Math.random() * notes.length);
      setNumber(newNumber);
    }
    setNote(notes[number]);
  }

  useEffect(() => {
    getNote();
  });

  return (
    <Note
      cx={note.positionX}
      cy={note.positionY}
      line={note.line}
      onClick={() => {}}
    />
  );
}

export default Learn;
