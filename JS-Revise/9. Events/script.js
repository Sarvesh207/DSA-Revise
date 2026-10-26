let parent = document.getElementById("parent");
let child = document.getElementById("child");

// // Event Bubbling
// parent.addEventListener("click", () => {
//   console.log(`Event is bubbling`);
// });


// child.addEventListener("click", (e) => {
//   // e.stopPropagation()
//   console.log(`Child is clicked`);
// });



// Event Captchuring

parent.addEventListener("click", () => {
  console.log(`Event is bubbling`);
}, true);


child.addEventListener("click", (e) => {
  // e.stopPropagation()
  console.log(`Child is clicked`);
});


