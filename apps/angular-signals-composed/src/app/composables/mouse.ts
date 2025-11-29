import { signal, inject, effect } from "@angular/core";
import { DOCUMENT } from "@angular/common";

export function injectMouse() {
  const document = inject(DOCUMENT);
  const mouseX = signal(0);
  const mouseY = signal(0);

  const handleMouseMove = (event: MouseEvent) => {
    mouseX.set(event.clientX);
    mouseY.set(event.clientY);
  };

  effect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  });

  return {
    mouseX: mouseX.asReadonly(),
    mouseY: mouseY.asReadonly(),
  };
}
