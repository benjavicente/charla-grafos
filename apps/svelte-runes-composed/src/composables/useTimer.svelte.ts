export function useTimer() {
  let secondsSinceRender = $state(0);
  const renderTime = Date.now();

  $effect(() => {
    const intervalId = setInterval(() => {
      secondsSinceRender = Math.floor((Date.now() - renderTime) / 1000);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  });

  return { 
    get secondsSinceRender() { return secondsSinceRender; }
  };
}

