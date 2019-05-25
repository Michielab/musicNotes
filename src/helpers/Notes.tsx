// import Clow from 'sounds/fKey/';
// import Dlow from 'sounds/fKey/D-low.wav';
// import Elow from 'sounds/fKey/E-low.wav';
// import Flow from 'sounds/fKey/F-low.wav';
// import Glow from 'sounds/fKey/G-low.wav';
// import Alow from 'sounds/fKey/A-low.wav';
// import Blow from 'sounds/fKey/B-low.wav';

// import Chigh from 'sounds/fKey/C-high.wav';
// import Dhigh from 'sounds/fKey/D-high.wav';
// import Ehigh from 'sounds/fKey/E-high.wav';
// import Fhigh from 'sounds/fKey/F-high.wav';
// import Ghigh from 'sounds/fKey/G-high.wav';
// import Ahigh from 'sounds/fKey/A-high.wav';

export const startPointX: number = 160;

export interface NoteInterface {
  // fKeySimple: { name: string; sound: string; line: boolean }[];
  [key: string]: { name: string; sound: string; line: boolean }[];
}

export const notes: NoteInterface = {
  fKeySimple: [
    {
      name: 'C',
      sound: 'Clow',
      line: true
    },
    {
      name: 'D',
      sound: 'Dlow',
      line: false
    },
    {
      name: 'E',
      sound: 'Elow',
      line: false
    },
    {
      name: 'F',
      sound: 'Flow',
      line: false
    },
    {
      name: 'G',
      sound: 'Glow',
      line: false
    },
    {
      name: 'A',
      sound: 'Alow',
      line: false
    },
    { name: 'B', sound: 'Blow', line: false },
    {
      name: 'C',
      sound: 'Chigh',
      line: false
    },
    {
      name: 'D',
      sound: 'Dhigh',
      line: false
    },
    {
      name: 'E',
      sound: 'Ehigh',
      line: false
    },
    {
      name: 'F',
      sound: 'Fhigh',
      line: false
    },
    {
      name: 'G',
      sound: 'Ghigh',
      line: false
    },
    {
      name: 'A',
      sound: 'Ahigh',
      line: true
    }
  ]
};

export function getNotes(
  middle: number,
  divider: number,
  width: number,
  game: string = 'fKeySimple'
) {
  let x = (width - startPointX) / notes[game].length;
  let dividerNotes = divider / 2;
  return notes['fKeySimple'].map((note, index) => {
    return {
      ...note,
      positionX: startPointX + x * index,
      positionY: middle - dividerNotes * (index - (notes[game].length - 1) / 2)
    };
  });
}
