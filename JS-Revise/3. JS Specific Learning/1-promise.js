const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolve value by p1!");
  }, 5000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolve value by p2!");
  }, 10000);
});

async function handlePromise() {
  console.log("hi");

  const val1 = await p2;
  console.log("Hello There!");

  console.log(val1);

  const val2 = await p1;
  console.log("Hello There! 2");

  console.log(val2);
}

handlePromise();
