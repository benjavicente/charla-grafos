import { Component, inject, signal, OnInit, OnDestroy } from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-root",
  standalone: true,
  template: `
    <div class="app">
      <h1>Angular Signals</h1>
      <div class="section">
        <h2>Mouse Position</h2>
        <p>X: {{ mouseX() }}, Y: {{ mouseY() }}</p>
      </div>
      <div class="section">
        <h2>Seconds Since Render</h2>
        <p>{{ secondsSinceRender() }} seconds</p>
      </div>
      <div class="section">
        <h2>Counter</h2>
        <p>Count: {{ counter() }}</p>
        <button (click)="increment()">+</button>
        <button (click)="decrement()">-</button>
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
export class AppComponent implements OnInit, OnDestroy {
  private document = inject(DOCUMENT);

  mouseX = signal(0);
  mouseY = signal(0);
  secondsSinceRender = signal(0);
  counter = signal(0);

  private renderTime = Date.now();
  private intervalId?: number;

  ngOnInit() {
    this.document.addEventListener("mousemove", this.handleMouseMove);
    this.intervalId = window.setInterval(() => {
      this.secondsSinceRender.set(
        Math.floor((Date.now() - this.renderTime) / 1000)
      );
    }, 1000);
  }

  ngOnDestroy() {
    this.document.removeEventListener("mousemove", this.handleMouseMove);
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private handleMouseMove = (event: MouseEvent) => {
    this.mouseX.set(event.clientX);
    this.mouseY.set(event.clientY);
  };

  increment() {
    this.counter.update((value) => value + 1);
  }

  decrement() {
    this.counter.update((value) => value - 1);
  }
}
