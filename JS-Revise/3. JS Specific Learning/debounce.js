function debounce(fn, delay = 300) {
  let timer;

  return function (...args) {
    console.log("args",args)

    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

let input = document.getElementById("input");

let debounced = debounce(handler, 1000);

function handler(e) {
  let q = e.target.value;
  console.log("query", q);
}
input.addEventListener("input", debounced);
