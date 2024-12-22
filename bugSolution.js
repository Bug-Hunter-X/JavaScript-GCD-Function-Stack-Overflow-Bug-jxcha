function foo(a, b) {
  // Handle invalid inputs (non-positive integers)
  if (a <= 0 || b <= 0) {
    return NaN; // Or throw an error
  }

  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

console.log(foo(10, 2)); // Output: 2
console.log(foo(10, 0)); // Output: NaN
console.log(foo(48,18)); // Output: 6