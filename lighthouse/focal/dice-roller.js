let prompt = process.argv.slice(2);
let numberOfRolls = Number(prompt);
let result = [];

let randomRollDice = function() {
  const min = 1;
  const max = 6;
  return Math.floor(Math.random() * (max) + min);
};

let diceRoller = function(num) {
  console.log(num);
  for (let i = 0; i < num; i++) {
    result.push(randomRollDice());
  }
  return result.join(', ');
};

console.log(`Rolled ${numberOfRolls} dice: ${diceRoller(numberOfRolls)}`);

