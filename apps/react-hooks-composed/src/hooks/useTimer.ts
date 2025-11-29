import { useState, useEffect } from "react";

export function useTimer() {
  const [secondsSinceRender, setSecondsSinceRender] = useState(0);

  useEffect(() => {
    const renderTime = Date.now();
    const intervalId = setInterval(() => {
      const seconds = Math.floor((Date.now() - renderTime) / 1000);
      setSecondsSinceRender(seconds);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return { secondsSinceRender };
}

