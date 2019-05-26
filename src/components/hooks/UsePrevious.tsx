import { useEffect, useRef } from 'react';

// In this case the interface is any, because it can be anything.
function usePrevious(value: any) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export default usePrevious;
