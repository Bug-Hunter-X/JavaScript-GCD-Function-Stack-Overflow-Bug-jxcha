# JavaScript GCD Function Stack Overflow Bug

This repository demonstrates a common bug in recursive JavaScript functions: stack overflow errors.  The `foo` function, intended to calculate the greatest common divisor (GCD) using Euclid's algorithm, recursively calls itself until it reaches the base case (`a === b`). However, for certain input pairs, the recursion depth becomes excessive, causing a stack overflow.

The `bug.js` file contains the buggy code, while `bugSolution.js` provides a corrected version that addresses the stack overflow by using an iterative approach.

## How to reproduce the bug

1. Clone this repository.
2. Navigate to the repository directory.
3. Run `node bug.js`.
4. Observe the stack overflow error.

## How to fix the bug

The solution employs an iterative approach to avoid deep recursion. This approach handles GCD calculations without exceeding the call stack limits, regardless of input size.

## Lessons learned

This example highlights the importance of considering recursion depth when designing recursive functions, particularly for potentially large inputs.  Iterative solutions are often a more robust alternative when dealing with such scenarios.