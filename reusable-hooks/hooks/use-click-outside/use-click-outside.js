import { useEffect } from 'react';

import { useLatestValue } from './use-latest-value';

export const useClickOutside = (elementRef, onClickOutside) => {
  const clickOutsideHandler = useLatestValue(onClickOutside);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!elementRef.current) return;

      if (
        event.target instanceof Node &&
        !elementRef.current.contains(event.target)
      ) {
        clickOutsideHandler.current(event);
      }
    };

    document.addEventListener('mousedown', handleClickOutside, true);
    document.addEventListener('touchstart', handleClickOutside, true);
    document.addEventListener('contextmenu', handleClickOutside, true);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true);
      document.removeEventListener('touchstart', handleClickOutside, true);
      document.removeEventListener('contextmenu', handleClickOutside, true);
    };
  }, [elementRef, clickOutsideHandler]);
};
