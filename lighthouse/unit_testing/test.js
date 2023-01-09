let count = [6,2,3,4,9,6,1,0,5];
console.log(count.length);

let arrs = [6,2,3,4,9,6,1,0,5];
let popMean = 1;
let newarr = [];

//Math.pow((x - popMean), 2)
arrs.forEach(x => {
  newarr.push(x+1);
});

console.log(newarr);
