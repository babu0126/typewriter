const rollDie = function () {
  return Math.floor(1 + Math.random() * 6);
}
console.log(rollDie());



function makeLoadedDie() {
  const list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  let counter = 0;

  return function() {
    let temp = list[counter];
    counter ++;
    return temp;
  }
}

const rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6

//Implement a function countdownGenerator() that takes in a number x and returns a function that counts down when it is called (see starter code below).

const countdownGenerator = function (x) {
  let counter = x;
  return function () {
    if (counter === 3) {
      console.log(`T-mins 3...`);
    } else if (counter === 2) {
      console.log(`T-mins 2...`);
    } else if (counter === 1) {
      console.log(`T-mins 1...`);
    } else if (counter === 0) {
      console.log(`Blast Off!`);
    } else if (counter < 0) {
      console.log(`Rockets alrady gone, bub!`);
    }
    counter --;
    return counter;
  }
  };


const countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!