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


interface SoundProps {}

function Sound(props: SoundProps) {
  let audioContext = useRef(
    new ((window as any).AudioContext || (window as any).webkitAudioContext)()
  );
  const [{ play }, dispatch] = useStateValue();

  /* 
  Create refs from the different notes, 
  so we can store the buffered sound in the ref object.
  This because we only want to load the sounds once.
  */
  const aHigh = useRef();
  const aLow = useRef();
  const bLow = useRef();

  /* 
    Assign the different sound buffers to the correct consts. 
    UseBuffer function expects the audioContext and the path to the sample.
  */
  aHigh.current = UseBuffer({ audioContext, sample: './A-high.wav' });
  aLow.current = UseBuffer({ audioContext, sample: './A-low.wav' });
  bLow.current = UseBuffer({ audioContext, sample: './B-low.wav' });

  if (play) {
    triggerSound(aHigh.current, audioContext.current);
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
