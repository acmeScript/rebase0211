import { Assert } from "./assert";
import { EqualRuntime } from "./equal";
import { Mistake } from "./mistake";
import { User, Votes } from "./stub";

type Strict<Actual, Expected> =
  | EqualRuntime<Actual, Expected>
  | Mistake<
      "Wrong key",
      Actual extends Expected
        ? Exclude<keyof Actual, keyof Expected>
        : Exclude<keyof Expected, keyof Actual>
    >;

type left_key = Assert<Strict<{ up: 1; down: 2 }, Votes>, Mistake<"Wrong key">>;
