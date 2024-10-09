import './style.css';
// synchronous functionality

function synchronousfun() {
  console.log('start');
  console.log('middle');
  console.log('end');
}
synchronousfun();

// Asynchronous functionality

console.log('start');
setTimeout(function () {
  console.log('asychronous operation completed');
}, 2000);
console.log('end');

~