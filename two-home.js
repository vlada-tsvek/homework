// task 1 (Перевірте істинність висловлювання:a < b < c)
let a, b, c;
a=parseInt(prompt("enter a number"));
b=parseInt(prompt("enter a number"));
c=parseInt(prompt("enter a number"));

if(a<b && b<c) {
    console.log(a + "<" + b + "<" + c + " " + true);
}
else {
    console.log(a + "<" + b + "<" + c + " " + false);
}

// task 2 
let x = 1;
let y = 2;
let res1 = "1"+"2"; // Допишіть код, необхідно використовувати змінні x і y
console.log(res1); // ""12""
console.log(typeof res1); // ""string""

let x = 1;
let y = 2;
let res2 = " " + (x===1) + y;// Допишіть код, необхідно використовувати змінні x і y
console.log(res2); // ""true2""
console.log(typeof res2); // ""string""

let x = 1;
let y = 2;
let res3 = x<y// Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3); // ""boolean""

let x = 1;
let y = 2;
let res4 = x/"y";// Допишіть код, необхідно використовувати змінні x і y
console.log(res4); // NaN
console.log(typeof res4); // ""number""

// task 3 (задайте користувачу питання)

let isAdult
isAdult = prompt("Введіть Ваш вік")

if(isAdult>=18) {
    console.log("Ви досягли повнолітнього віку");
}
else {
    console.log("Ви ще надто молоді");
}

// task 4 !!!!!(не зрозуміла)

// function qwe(arr) {
// let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5]
// let pow = 0;
// let trap;
// for (let i = 0; i < arr.lengt; i++) {
//     let elem = 0;
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[i] == arr[j]);
//             elem++;
            
//     }

// if (elem > pow) {
//     pow = elem;
//     trap = arr[i];

// }  
// }
// }
// return trap;

// task 5 (сторони трикутника)

let a, b, c, p, s;
a=parseFloat(prompt("перша сторона"));
b=parseFloat(prompt("друга сторона"));
c=parseFloat(prompt("третя сторона"));   
p=(a + b + c) / 2;
s=Math.sqrt(p*(p-a)*(p-b)*(p-c))

console.log(s);

if (a**2 + b**2 == c**2 || a**2 + c**2 == b**2 || b**2 + c**2 == a**2) {
    console.log("трикутник прямокутний"); //8, 15, 17
  } 
else {
    console.log("трикутник не прямокутний");
  }

// task 6 (арифметичних операцій)

function calc(a, b, op) {

switch (op) {
    case 1:
        console.log(a-b);
        break;
    case 2:
        console.log(a*b);
        break;    
    case 3:
        console.log(a/b);
        break;
    default:
        console.log(a+b);
        break;
}
}

// task 7

function findUnique(arr) {
  const set = new Set(arr);
  return set.size === arr.length;
}
let arr1 = ([1, 2, 3, 5, 3]);  // => false
let arr2 = ([1, 2, 3, 5, 11]); // => true

console.log(findUnique(arr1));
console.log(findUnique(arr2));



