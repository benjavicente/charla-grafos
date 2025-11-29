import { Component, OnInit, OnDestroy, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { CommonModule } from "@angular/common";
import { BehaviorSubject, fromEvent, interval, Subscription } from "rxjs";
import { map, startWith } from "rxjs/operators";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="app">
      <h1>Angular Inject Decorator</h1>
      <div class="section">
        <h2>Mouse Position</h2>
        <p>X: {{ mouseX$ | async }}, Y: {{ mouseY$ | async }}</p>
      </div>
      <div class="section">
        <h2>Seconds Since Render</h2>
        <p>{{ secondsSinceRender$ | async }} seconds</p>
      </div>
      <div class="section">
        <h2>Counter</h2>
        <p>Count: {{ counter$ | async }}</p>
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
  mouseX$ = new BehaviorSubject<number>(0);
  mouseY$ = new BehaviorSubject<number>(0);
  secondsSinceRender$ = new BehaviorSubject<number>(0);
  counter$ = new BehaviorSubject<number>(0);

  private renderTime = Date.now();
  private subscriptions = new Subscription();

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    // Mouse position using fromEvent
    const mouseMove$ = fromEvent<MouseEvent>(this.document, "mousemove");

    const mouseXSub = mouseMove$
      .pipe(map((event) => event.clientX))
      .subscribe((x) => this.mouseX$.next(x));

    const mouseYSub = mouseMove$
      .pipe(map((event) => event.clientY))
      .subscribe((y) => this.mouseY$.next(y));

    // Timer using interval
    const timerSub = interval(1000)
      .pipe(
        map(() => Math.floor((Date.now() - this.renderTime) / 1000)),
        startWith(0)
      )
      .subscribe((seconds) => this.secondsSinceRender$.next(seconds));

    this.subscriptions.add(mouseXSub);
    this.subscriptions.add(mouseYSub);
    this.subscriptions.add(timerSub);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  increment() {
    this.counter$.next(this.counter$.value + 1);
  }

  decrement() {
    this.counter$.next(this.counter$.value - 1);
  }
}
