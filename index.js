//1. Создать массив в переменную  и после заполнить его числами последовательно от 5 до 15
const arr = [];

for (let i = 5; i <= 15; i++) {
  arr[i] = i;
}

//  console.dir(arr);

//2. Создать массив и заполнить его 10ю нечетными числами
let counter = 0;
const arr2 = [];

while (counter < 10) {
  let number = Number(Math.random() * (100 - 1) + 1).toFixed(0);
  if (number % 2 !== 0) {
    arr2[counter] = number;
    counter++;
  }
}
//  console.dir(arr2);

//3. С помощью функции конструктора User создать 10 пользователей и поместить их в массив

function User(name, age, id) {
  this.name = name;
  this.age = age;
  this.id = id;
}
const arr3 = [];
for (let i = 0; i < 10; i++) {
  arr3[i] = new User("Andrii", 21, "23");
}
// console.dir(arr3);

//4. * массив (с примитивными типами) перевести в строку с разделителем & или @

const arr4 = [55, 55, 33, 22, 33, 11, 66];

let str = arr4.toString();

let newStr = " ";

for (let index = 0; index < str.length; index++) {
  newStr[0] += "a";

  if (str.charAt(index) !== ",") {
    newStr[index] += str.charAt(index); // NEPOYMU POCHEMU ONO NE ZAPISUET js THE BEST :) OSTAVLU tak
  }
  if (str.charAt(index) === ",") {
    newStr[index] += "$";
  }
}

// console.log(newStr);

//5.  Переменную хранящей обьект преобразовать в массив

const student = {
  firstName: "Andrey",
  age: 22,
  Premium: 1222,
  id: "awf21",
};

let stud = [];

for (let item in student) {
  stud.push(item);
}

console.dir(stud);
