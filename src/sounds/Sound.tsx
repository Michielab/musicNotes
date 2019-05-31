import React, { useRef } from 'react';

/* Import audioContext */
import AudioCtxContext from 'contextProvider/audioContext';
import { Actions } from 'actions/Actions';
import UseBuffer from 'components/hooks/UseBuffer';
import { useStateValue } from 'contextProvider/contextProvider';

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

  /* 
    - triggerSound creates all the nodes that the web audio api needs to play a sound. 
    - it takes the parameters bufferType which is the note to play, and the audioContext object.
  */
  function triggerSound(bufferType: any, audioContext: any) {
    let compressor = audioContext.createDynamicsCompressor();
    let source = audioContext.createBufferSource();
    let gain = audioContext.createGain();

    // setting the source with the current sample
    source.buffer = bufferType;

    source.connect(gain);
    gain.connect(compressor);
    compressor.connect(audioContext.destination);
    source.start();
  }

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
