export function useCounter() {
  let counter = $state(0);

  function increment() {
    counter++;
  }

  function decrement() {
    counter--;
  }

  return { counter, increment, decrement };
}

