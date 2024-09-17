import { useLayoutEffect, useRef } from 'react';

export const useLatestValue = (value) => {
  const latestValueRef = useRef(value);

  useLayoutEffect(() => {
    latestValueRef.current = value;
  });

  return latestValueRef;
};
