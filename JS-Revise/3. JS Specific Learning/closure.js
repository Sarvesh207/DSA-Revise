Promise.resolve().then(() => console.log(1));
setTimeout(() => queueMicrotask(() => console.log(2)), 0);
queueMicrotask(() => console.log(3));
setTimeout(() => console.log(4), 0);
(async () => console.log(5))();
queueMicrotask(() => console.log(6));
console.log(7);
new Promise(() => console.log(8));