  /* 
    - triggerSound creates all the nodes that the web audio api needs to play a sound. 
    - it takes the parameters bufferType which is the note to play, and the audioContext object.
  */
 export default function triggerSound(bufferType: any, audioContext: any) {
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