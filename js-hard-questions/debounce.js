function debounce(fn, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId); // clearing prev timeout
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}
function search(query) {
  console.log("Searching for ", query);
}

const searchWithDebounce = debounce(search, 1000);

console.log(searchWithDebounce("hard"));
console.log(searchWithDebounce("hard interview ques"));
console.log(searchWithDebounce("hard interview question"));
