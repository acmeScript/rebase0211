export type Equal<A, B> = A extends B ? (B extends A ? unknown : never) : never;
export type EqualRuntime<A, B> = (<X>() => X extends A ? 0 : 1) extends <
  X
>() => X extends B ? 0 : 1
  ? unknown
  : never;
//test
type inner = Equal<true, false>; //| "Never"; пересечение

type outer = Equal<true, false>; //& "Never"; !пересечение

type foo<A> = <X>() => X & A; //runtime fail X

type runtime = EqualRuntime<object, Object>; //compiler val identity
