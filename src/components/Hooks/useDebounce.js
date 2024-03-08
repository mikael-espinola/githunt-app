import { useRef } from "react";

const useDebounce = (fn, delay) => {
  const timeoutRef = useRef();
  let debounceFunction = (...args) => {
    window.clearInterval(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      fn(...args);
    }, delay);
  };

  return debounceFunction;
};

export default useDebounce;
