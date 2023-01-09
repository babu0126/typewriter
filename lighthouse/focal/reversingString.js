let prompt = require('prompt-sync')();
let result = '';
let input = prompt('Enter String: ');
let string = input.split(' ');

for (let i = 0; i < string.length; i++) {
  let newString = string[i].split('');
  for (let j = newString.length - 1; j >= 0; j--) {
    result += newString[j];
  }
}
console.log(result);