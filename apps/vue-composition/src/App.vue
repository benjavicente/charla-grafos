<template>
  <div class="app">
    <h1>Vue Composition API</h1>
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

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const mouseX = ref(0);
const mouseY = ref(0);
const secondsSinceRender = ref(0);
const counter = ref(0);
const renderTime = Date.now();
let intervalId = null;

function handleMouseMove(event) {
  mouseX.value = event.clientX;
  mouseY.value = event.clientY;
}

onMounted(() => {
  window.addEventListener("mousemove", handleMouseMove);
  intervalId = setInterval(() => {
    secondsSinceRender.value = Math.floor((Date.now() - renderTime) / 1000);
  }, 1000);
});

onBeforeUnmount(() => {
  window.removeEventListener("mousemove", handleMouseMove);
  if (intervalId) {
    clearInterval(intervalId);
  }
});

function increment() {
  counter.value++;
}

function decrement() {
  counter.value--;
}
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
