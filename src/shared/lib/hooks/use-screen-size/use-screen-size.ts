import { useEffect, useState } from 'react';
import { TWindowSize } from './use-screen-size.types';

export const useScreenSize = (): TWindowSize => {
  const [screenSize, setScreenSize] = useState<TWindowSize>({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handlerResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handlerResize);

    return () => {
      window.removeEventListener('resize', handlerResize);
    };
  }, []);

  return screenSize;
};
