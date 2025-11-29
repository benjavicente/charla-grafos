<template>
  <div class="app">
    <h1>Vue Options API</h1>
    <div class="section">
      <h2>Mouse Position</h2>
      <p>X: {{ mouseX }}, Y: {{ mouseY }}</p>
    </div>
    <div class="section">
      <h2>Seconds Since Render</h2>
      <p>{{ secondsSinceRender }} seconds</p>
    </div>
    <div class="section">
      <h2>Counter</h2>
      <p>Count: {{ counter }}</p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      mouseX: 0,
      mouseY: 0,
      secondsSinceRender: 0,
      counter: 0,
      renderTime: Date.now(),
      intervalId: null,
    };
  },
  mounted() {
    window.addEventListener("mousemove", this.handleMouseMove);
    this.intervalId = setInterval(() => {
      this.secondsSinceRender = Math.floor(
        (Date.now() - this.renderTime) / 1000
      );
    }, 1000);
  },
  beforeUnmount() {
    window.removeEventListener("mousemove", this.handleMouseMove);
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  },
  methods: {
    handleMouseMove(event) {
      this.mouseX = event.clientX;
      this.mouseY = event.clientY;
    },
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
  },
};
</script>

<style scoped>
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
