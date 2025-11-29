import { signal, effect } from "@angular/core";

export function injectTimer() {
  const secondsSinceRender = signal(0);
  const renderTime = Date.now();

  effect(() => {
    const intervalId = setInterval(() => {
      secondsSinceRender.set(Math.floor((Date.now() - renderTime) / 1000));
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  });

  return {
    secondsSinceRender: secondsSinceRender.asReadonly(),
  };
}
