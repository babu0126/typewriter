const input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

let output = 0;

const result = input.map((element) => Math.sqrt(Math.pow(element.x, 2) + Math.pow(element.y,2)));

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);

// z^2 = x^2 + y^2.

// The result should be an array of numbers corresponding to the x-y pairs provided in the input array (ie: calculate z given x and y).