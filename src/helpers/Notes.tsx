export const startPointX: number = 160;

export interface NoteInterface {
  [key: string]: { name: string; sound: string; line: boolean }[];
}

export const notes: NoteInterface = {
  fKeySimple: [
    {
      name: 'C',
      sound: 'cLow',
      line: true
    },
    {
      name: 'D',
      sound: 'dLow',
      line: false
    },
    {
      name: 'E',
      sound: 'eLow',
      line: false
    },
    {
      name: 'F',
      sound: 'fLow',
      line: false
    },
    {
      name: 'G',
      sound: 'gLow',
      line: false
    },
    {
      name: 'A',
      sound: 'aLow',
      line: false
    },
    { name: 'B', sound: 'bLow', line: false },
    {
      name: 'C',
      sound: 'cHigh',
      line: false
    },
    {
      name: 'D',
      sound: 'dHigh',
      line: false
    },
    {
      name: 'E',
      sound: 'eHigh',
      line: false
    },
    {
      name: 'F',
      sound: 'fHigh',
      line: false
    },
    {
      name: 'G',
      sound: 'gHigh',
      line: false
    },
    {
      name: 'A',
      sound: 'aHigh',
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
