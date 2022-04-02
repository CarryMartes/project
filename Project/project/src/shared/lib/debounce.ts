export function debounce<T>(func: (...args: T[]) => void, timeout = 300) {
  let timer: NodeJS.Timeout;
  return (...args: T[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
}
