import { useState } from 'react';
import { NoteInterface } from 'helpers/Notes';

interface UseNextNote {
  notes: [];
}

function UseNextNote(props: NoteInterface):number {
  const [newRandomNumber, setRandomNumber] = useState(0);
  let randomNumber = Math.floor(Math.random() * props.notes.length);
  setRandomNumber(randomNumber);

  return randomNumber !== newRandomNumber
    ? newRandomNumber
    : UseNextNote(props);
}

export default UseNextNote;
