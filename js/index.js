let n = parseFloat(prompt("Введіть число"))
function fib(n) {
  let a = 0,
    b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}
