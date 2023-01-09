const args = process.argv;
let sumArray = args.slice(2).map(x => x * 1);
let sum = sumArray[0] + sumArray[1];
console.log(sum);