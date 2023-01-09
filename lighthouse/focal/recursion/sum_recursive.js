// function sumToOne(n) {
//   let sum = 0;
//   for (let i = n; i >= 1; i--) {
//     sum += i;
//   }
//   return sum;
// }

function sumToOne(n) {
  if (n === 1) {
    return 1;
  } else {
    return n + sumToOne(n-1);
  }
}
console.log(sumToOne(4));