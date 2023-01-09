let array = [10, 2, 5, 1, 9];

array = array.sort((a, b) => a - b);
console.log(array);

const students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

students.sort((a, b) => b.age - a.age);

students.sort((a, b) => {
  let nameA = a.name.toUpperCase();
  let nameB = b.name.toUpperCase();
  return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
});

console.log(students);



