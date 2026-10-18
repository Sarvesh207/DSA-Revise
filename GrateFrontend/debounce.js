function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

function search(query) {
  console.log(`Searching for`, query);
}

const searchWithDebounce = debounce(search, 1000);

searchWithDebounce("h");
searchWithDebounce("ha");
searchWithDebounce("har");
searchWithDebounce("hard");
searchWithDebounce("hard inter");
searchWithDebounce("hard interv");
searchWithDebounce("hard intervi");
searchWithDebounce("hard intervie");
searchWithDebounce("hard interview");
searchWithDebounce("hard interview p");
searchWithDebounce("hard interview pr");
searchWithDebounce("hard interview pro");
searchWithDebounce("hard interview prob");
searchWithDebounce("hard interview probl");
searchWithDebounce("hard interview proble");
searchWithDebounce("hard interview problem");
