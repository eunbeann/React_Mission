import { useState, useEffect } from "react";

export const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    // 0.5초 이후에 debaounvalue에 들어감

    return () => {
      clearTimeout(handler);
    };
    // 0.5초 이전에 더 타이핑하면 앞에꺼 없어지고 그 뒤에 다시 들ㅇ감
  }, [value, delay]);

  return debounceValue;
};
