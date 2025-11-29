import { signal } from "@angular/core";

export function injectCounter() {
  const value = signal(0);
  return {
    value: value.asReadonly(),
    increment: () => value.update((v) => v + 1),
    decrement: () => value.update((v) => v - 1),
  };
}
