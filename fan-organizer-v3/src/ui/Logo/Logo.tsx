import React, { useEffect, useRef, useState } from "react";
import { useLoadingState } from "../../context/loading-context";

function getNewRandomNumberInRange(prevNumber: number, size: number) {
  let n = 0;
  const range = [];
  for (let i = 0; i < size; i++) {
    if (i === prevNumber) {
      n++;
    }
    range.push(n++);
  }
  const index = Math.floor(Math.random() * (size - 1));
  return range[index];
}

function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef<() => void>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const strings = [
  "Fan Organizer v2",
  "Organizer Fun v2"
];
function useLoadingText({ active }: { active: boolean }) {
  const [index, setIndex] = useState(0);
  useInterval(
    () => {
      setIndex(index => getNewRandomNumberInRange(index, strings.length));
    },
    active ? 80 : null,
  );
  return strings[index];
}

export const Logo: React.FunctionComponent<{}> = () => {
  const isLoading = useLoadingState();
  const str = useLoadingText({ active: isLoading });
  return (
    <span
      style={{
        padding: "6px 10px",
        backgroundColor: "black",
        color: "white",
        fontFamily: "monospace",
      }}
    >
      <span>{str}</span>
    </span>
  );
};
