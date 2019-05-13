import React, { useEffect, useState } from 'react';

/* Helper function to get notes  */
import { getNotes, NoteInterface } from 'helpers/Notes';

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
  const [note, setNote] = useState({positionX: 0, positionY: 0, line: false})
  const { middle, divider, width } = props;


 
  function getNote(){
    console.log(middle, divider, width)
  let notes = getNotes(middle, divider, width);
   let number = UseNextNote(notes);
    setNote(notes[number])
  }

  // useEffect(()=> {
  //   getNote()
  // })
  // if(width === 0) {
  //   getNote()
  // }
  // let note = notes[number];
  console.log(middle, divider, width)
  console.log(note)
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
