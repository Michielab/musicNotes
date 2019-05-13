import { useState, useEffect } from 'react';

interface UseNextNote {
  notes: Array<{
    name: string;
    sound: string;
    line: boolean;
    positionX: number;
    positionY: number;
  }>;
}

function UseNextNote(notes: any) {
  // const [newRandomNumber, setRandomNumber] = useState(0);

  // function getRandomNumber() {
  //   let number = Math.floor(Math.random() * notes.length);
  //   setRandomNumber(number);
  // }

  // useEffect(() => {
  //   getRandomNumber();
  // });
  let number = Math.floor(Math.random() * notes.length);

  return number;
}

export default UseNextNote;
