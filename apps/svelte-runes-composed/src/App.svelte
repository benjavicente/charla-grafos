<script>
  import { useMouse } from "./composables/useMouse.svelte";
  import { useCounter } from "./composables/useCounter.svelte";
  import { useTimer } from "./composables/useTimer.svelte";

  const { mouseX, mouseY } = useMouse();
  const { counter, increment, decrement } = useCounter();
  const { secondsSinceRender } = useTimer();
</script>

<div class="app">
  <h1>Svelte Runes</h1>
  <div class="section">
    <h2>Mouse Position</h2>
    <p>X: {mouseX}, Y: {mouseY}</p>
  </div>
  <div class="section">
    <h2>Seconds Since Render</h2>
    <p>{secondsSinceRender} seconds</p>
  </div>
  <div class="section">
    <h2>Counter</h2>
    <p>Count: {counter}</p>
    <button onclick={increment}>+</button>
    <button onclick={decrement}>-</button>
  </div>
</div>

<style>
  .app {
    padding: 2rem;
    font-family: system-ui, -apple-system, sans-serif;
  }

  .section {
    margin: 2rem 0;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
  }

  .section h2 {
    margin-top: 0;
  }

  button {
    margin: 0 0.5rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
  }
</style>

