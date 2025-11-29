export function useMouse() {
  let mouseX = $state(0);
  let mouseY = $state(0);

  $effect(() => {
    function handleMouseMove(event: MouseEvent) {
      mouseX = event.clientX;
      mouseY = event.clientY;
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });

  return { mouseX, mouseY };
}

