declare const MistakeSymbol: unique symbol;
export type Mistake<Message extends string, Info = never> = Message & {
  [MistakeSymbol]: Info;
};
