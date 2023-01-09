const input = '7992739871';
const inputArray = input.split('');

for (let i = 1; i < inputArray.length; i=i+2) {
  if (inputArray[i] * 2 >= 10) {
    inputArray[i] = inputArray[i] * 2;
    let digitArr = inputArray[i].toString().split('');
    inputArray[i] =  parseInt(digitArr[0]) + parseInt(digitArr[1]);
  } else inputArray[i] = inputArray[i] * 2;
}
console.log(inputArray);
let copyArr = inputArray.map(element => parseInt(element)).reduce((a,b) => (a+b));
console.log(inputArray.map(element => parseInt(element)));
console.log(copyArr);


//checkDigit =  (10 -(sum mod 10)) mod 10


//console.log(inputArray);