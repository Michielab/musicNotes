import React, { useRef } from 'react';

/* Import audioContext */
import AudioCtxContext from 'contextProvider/audioContext';

/* Import hooks */
import UseBuffer from 'components/hooks/UseBuffer';

/* Import actions and context */
import { Actions } from 'actions/Actions';
import { useStateValue } from 'contextProvider/contextProvider';

/* Import helpers */
import triggerSound from './TriggerSound';
import { notes } from 'helpers/Notes';

interface SoundProps {}

function Sound(props: SoundProps) {
  let audioContext = useRef(
    new ((window as any).AudioContext || (window as any).webkitAudioContext)()
  );
  const [{ play, number, gameType }, dispatch] = useStateValue();

  /* 
  Create refs from the different notes, 
  so we can store the buffered sound in the ref object.
  This because we only want to load the sounds once.
  */
  const cLow = useRef();
  const dLow = useRef();
  const eLow = useRef();
  const fLow = useRef();
  const gLow = useRef();
  const aLow = useRef();
  const bLow = useRef();
  const cHigh = useRef();
  const dHigh = useRef();
  const eHigh = useRef();
  const fHigh = useRef();
  const gHigh = useRef();
  const aHigh = useRef();

  const notesRefsArray = [
    cLow,
    dLow,
    eLow,
    fLow,
    gLow,
    aLow,
    bLow,
    cHigh,
    dHigh,
    eHigh,
    fHigh,
    gHigh,
    aHigh
  ];

  /* 
    Assign the different sound buffers to the correct consts. 
    UseBuffer function expects the audioContext and the path to the sample.
  */
  notes[gameType].map((note, index) => {
   return notesRefsArray[index].current = UseBuffer({
      audioContext,
      sample: `./${note.sound}.wav`
    });
  });

  if (play) {
    triggerSound(notesRefsArray[number].current, audioContext.current);
    dispatch({
      type: Actions.TOGGLE_PLAY
    });
  }
  return null;
}

export default () => (
  <AudioCtxContext.Consumer>
    {childProps => <Sound {...childProps} />}
  </AudioCtxContext.Consumer>
);
