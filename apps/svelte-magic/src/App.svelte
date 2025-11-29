<script>
  import { onMount, onDestroy } from 'svelte'
  
  let mouseX = 0
  let mouseY = 0
  let secondsSinceRender = 0
  let counter = 0
  let renderTime = Date.now()
  let intervalId

  function handleMouseMove(event) {
    mouseX = event.clientX
    mouseY = event.clientY
  }

  onMount(() => {
    window.addEventListener('mousemove', handleMouseMove)
    intervalId = setInterval(() => {
      secondsSinceRender = Math.floor((Date.now() - renderTime) / 1000)
    }, 1000)
  })

  onDestroy(() => {
    window.removeEventListener('mousemove', handleMouseMove)
    if (intervalId) {
      clearInterval(intervalId)
    }
  })

  function increment() {
    counter++
  }

  function decrement() {
    counter--
  }
</script>

<div class="app">
  <h1>Svelte Magic Tags</h1>
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
    <button on:click={increment}>+</button>
    <button on:click={decrement}>-</button>
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

