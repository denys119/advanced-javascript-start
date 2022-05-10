// Reference types

const arr1 = [1, 2, 3];
const arr2 = arr1;
arr2.push(4);

console.log(arr1);
console.log(arr2);

const person1 = {
  name: 'John',
}
const person2 = person1;
person2.age = 18;

console.log(person1);
console.log(person2);
