import React, { useEffect, useRef } from 'react';
import WAAClock from 'waaclock';

/* Import audioContext */
import AudioCtxContext from 'contextProvider/audioContext';
import {sampleLoader} from 'helpers/SampleLoader';


interface SoundProps {}

function Sound(props: SoundProps) {
  let audioContext = useRef(
    new ((window as any).AudioContext || (window as any).webkitAudioContext)()
  );
  let hhLBuffer = useRef(  sampleLoader(
    './wa_free_ldrum_cl-hat_01_t1.wav',
    audioContext.current,
    (buffer: any) => {
       return  hhLBuffer = buffer
    //   this.hhLBuffer = buffer;
    }
  ))



  //   useEffect(() => {
  //     audioContext = new ((window as any).AudioContext ||
  //       (window as any).webkitAudioContext)();
  //       console.log(audioContext)
  //   },[]);
  console.log('props', props, audioContext, hhLBuffer);
  return null;
}

export default () => (
  <AudioCtxContext.Consumer>
    {childProps => <Sound {...childProps} />}
  </AudioCtxContext.Consumer>
);
