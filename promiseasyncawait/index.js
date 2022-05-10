// Asynchronous javascript

// Synchronous javascript example

console.log("Start Sync");

function simpleFunction() {
  console.log("Hello");
}

simpleFunction();

console.log("Finish Sync");


// Asynchronous javascript example

console.log("Start Async");

setTimeout(function() {
  console.log("Im here now");
}, 5000);

console.log("Finish Async");