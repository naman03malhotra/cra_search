function debounce(func, time) {
  let timeout;
  return function () {
    if (timeout) clearTimeout(timeout);
    const args = Array.from(arguments);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, time || 200);
  };
}

export { debounce };
