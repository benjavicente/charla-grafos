import { ref, onMounted, onBeforeUnmount } from "vue";

export function useMouse() {
  const mouseX = ref(0);
  const mouseY = ref(0);

  function handleMouseMove(event: MouseEvent) {
    mouseX.value = event.clientX;
    mouseY.value = event.clientY;
  }

  onMounted(() => {
    window.addEventListener("mousemove", handleMouseMove);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("mousemove", handleMouseMove);
  });

  return { mouseX, mouseY };
}

