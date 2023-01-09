let prompt = require('prompt-sync')();
let input = prompt('Enter String: ');
let string = input.split(' ');
let result = '';

for (let i = 0; i < string.length; i++) {
  let newString = string[i].split('');
  result += string[i].slice(1) + newString[0] + 'ay ';
}
console.log(result);