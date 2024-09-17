import { useEffect } from 'react';

import { useLatestValue } from './use-latest-value';

export const useWindowEvent = (eventName, eventHandler) => {
  const latestEventHandler = useLatestValue(eventHandler);

  useEffect(() => {
    const currentEventHandler = (event) => {
      latestEventHandler.current(event);
    };

    window.addEventListener(eventName, currentEventHandler);

    return () => window.removeEventListener(eventName, currentEventHandler);
  }, [eventName, latestEventHandler]);
};
