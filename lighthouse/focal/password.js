let prompt = process.argv.slice(2).toString();

let obfuscate = function(string) {
  let tempString = string.split('');
  for (let i = 0; i < string.length; i++) {
    if (tempString[i] === 'a') {
      tempString[i] = '4';
    } else if (tempString[i] === 'e') {
      tempString[i] = '3';
    } else if (tempString[i] === 'o') {
      tempString[i] = '0';
    } else if (tempString[i] === 'l') {
      tempString[i] = '1';
    }
  }
  return tempString.join('').toString();
};
console.log(obfuscate(prompt));