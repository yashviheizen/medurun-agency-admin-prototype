'use client';
import { useEffect, useRef, useState } from 'react';

export function useOtpTimer(initialSeconds = 30) {
  const [seconds, setSeconds] = useState(initialSeconds);
  const intRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const start = () => {
    setSeconds(initialSeconds);
    if (intRef.current) clearInterval(intRef.current);
    intRef.current = setInterval(() => {
      setSeconds(s => {
        if (s <= 1) {
          if (intRef.current) clearInterval(intRef.current);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
  };

  useEffect(() => () => {
    if (intRef.current) clearInterval(intRef.current);
  }, []);

  return { seconds, start, expired: seconds <= 0 };
}
