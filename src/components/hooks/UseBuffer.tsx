import { useEffect, useState } from 'react';

/* Import audioContext */
import { sampleLoader } from 'helpers/SampleLoader';

interface UseBufferProps {
  sample: string;
  audioContext: any;
}

function UseBuffer(props: UseBufferProps) {
  const [buffer, setBuffer] = useState();
  const { sample, audioContext } = props;
  useEffect(() => {
    /* Function to set the sample in the audioContextBuffer */
    sampleLoader(sample, audioContext.current, (buffer: any) => {
      setBuffer(buffer);
    });
  }, [audioContext, sample]);
  return buffer;
}

export default UseBuffer;
