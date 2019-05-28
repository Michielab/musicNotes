import React from "react";

import WAAClock from "waaclock";

let audioCtx: any = undefined;
let clock: any = undefined;

const { Provider, Consumer } = React.createContext({
  getAudioContext: () => audioCtx,
  getClock: () => clock,
  requestInit: () => {
    if (audioCtx == null || clock == null) {
      const AudioContext = (window as any).AudioContext || (window as any).webkitAudioContext;

      audioCtx = new AudioContext();
      clock = new WAAClock(audioCtx);
    }
  },
});

export default { Provider, Consumer };