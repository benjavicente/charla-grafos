import { Effect, Console } from "effect";

export function sampleEffect() {
  return Effect.gen(function* () {
    yield* Console.log("Starting sample effect...");
    yield* Effect.sleep("100 millis");
    yield* Console.log("Sample effect completed!");
    return "Effect result";
  });
}

export function runSampleEffect() {
  return Effect.runPromise(sampleEffect());
}
