function throttle(fn, delay) {
  let lastCall = 0;
  return function (...args) {
    let now = Date.now();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return fn(...args);
  };
}

function sendMessage(message) {
  console.log("Sending Message....", message);
}

const messageWithSlowMode = throttle(sendMessage, 2 * 1000);

messageWithSlowMode("Hi");
messageWithSlowMode("Hi How are you");
messageWithSlowMode("Hello");
