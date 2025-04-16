import { useEffect, useState } from 'react';

export const useDelayedLoader = (minDelay = 300) => {
  const [isActive, setIsActive] = useState(false);

  const start = () => setIsActive(true);
  const stop = () => setIsActive(false);

  const show = useDelayedBoolean(isActive, minDelay);

  return { show, start, stop };
};

// Wewnętrzny hook opóźniający zniknięcie loadera
const useDelayedBoolean = (value: boolean, delay: number): boolean => {
  const [delayed, setDelayed] = useState(false);

  useEffect(() => {
    if (value) {
      setDelayed(true);
    } else {
      const timeout = setTimeout(() => setDelayed(false), delay);
      return () => clearTimeout(timeout);
    }
  }, [value, delay]);

  return delayed;
};
