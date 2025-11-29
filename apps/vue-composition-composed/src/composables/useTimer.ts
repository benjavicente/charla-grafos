import { ref, onMounted, onBeforeUnmount } from "vue";

export function useTimer() {
  const secondsSinceRender = ref(0);
  const renderTime = Date.now();
  let intervalId: ReturnType<typeof setInterval> | null = null;

  onMounted(() => {
    intervalId = setInterval(() => {
      secondsSinceRender.value = Math.floor(
        (Date.now() - renderTime) / 1000
      );
    }, 1000);
  });

  onBeforeUnmount(() => {
    if (intervalId) {
      clearInterval(intervalId);
    }
  });

  return { secondsSinceRender };
}

