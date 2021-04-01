function factorial(n) {

let a = 1;

  for (let i = n; i > 0; i--) {

    a *= i;

  }

  return a;
}

factorial(5);
