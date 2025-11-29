import { Component } from "@angular/core";
import { injectMouse } from "./composables/mouse";
import { injectCounter } from "./composables/counter";
import { injectTimer } from "./composables/timer";

@Component({
  selector: "app-root",
  standalone: true,
  template: `
    <div class="app">
      <h1>Angular Signals Composed</h1>
      <div class="section">
        <h2>Mouse Position</h2>
        <p>X: {{ mouse.mouseX() }}, Y: {{ mouse.mouseY() }}</p>
      </div>
      <div class="section">
        <h2>Seconds Since Render</h2>
        <p>{{ timer.secondsSinceRender() }} seconds</p>
      </div>
      <div class="section">
        <h2>Counter</h2>
        <p>Count: {{ counter.value() }}</p>
        <button (click)="counter.increment()">+</button>
        <button (click)="counter.decrement()">-</button>
      </div>
    </div>
  `,
  styles: [
    `
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
    `,
  ],
})
export class AppComponent {
  mouse = injectMouse();
  counter = injectCounter();
  timer = injectTimer();
}
