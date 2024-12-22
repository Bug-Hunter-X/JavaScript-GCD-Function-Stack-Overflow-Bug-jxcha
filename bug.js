function foo(a, b) {
  if (a === b) {
    return true; 
  }
  if (a > b) {
    return foo(a - b, b);
  } else {
    return foo(a, b - a);
  }
}

console.log(foo(10, 2)); // Expected: true, Actual: Stack Overflow