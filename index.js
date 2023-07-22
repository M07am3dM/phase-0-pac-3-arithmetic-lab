function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

console.log(add("8, 2"));
console.log(subtract("20, 5"));
console.log(multiply("5, 15"));
console.log(divide("18, 6"));

function increment(n) {
  return ++n;
}

function decrement(n) {
  return --n;
}

console.log(increment(2023));
console.log(decrement(2019));

function makeInt(n) {
  return parseInt(n, 10);
}

console.log(makeInt("89"));

function preserveDecimal(n) {
  return parseFloat(n);
}

console.Console.log(preserveDecimal("3.141592"));
