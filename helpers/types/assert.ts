import { EqualRuntime } from "./equal";
import { Mistake } from "./mistake";

export type Assert<
  Actual extends
    | EqualRuntime<Actual, Expected>
    | Mistake<
        "Assert Fail",
        {
          actual: Actual;
          expected: Expected;
        }
      >,
  Expected
> = Actual;

//test
type xx = Assert<true, true>;

type should_true_equal_true = Assert<true, true>;
type should_true_not_equal = Assert<true, false>;
