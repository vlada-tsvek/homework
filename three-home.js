// task 1
function compact(arr){
    const result = [];

    for (let i = 0; i < arr.length; i++){
        if (result.indexOf(arr[i]) == -1){
            result.push(arr[i]);
        }
    }
    return result ;
}

const arr = [5, 3, 4, 5, 6, 7, 3];
const arr2 = compact(arr)
console.log(arr2);

//task 2
function createArray(a, b) {
    const result = [];
    for (let i = a; i <= b; i++) {
        result.push(i);
    }
    return result;
}
let arr = createArray(2, 9);
console.log(arr);

//task 3
function createArray(a, b) {
    const result = [];
    for (let i = a; i <= b; i++) {
        if (i == a) {
            result.push(i);            
        }
        else {
            result.push(i);
            result.push(i);
        }        
    }
    return result;
}
let arr = createArray(2, 9);
console.log(arr);

// task 4
function randArray(k) {
    const result = [];
    for (let i = 0; i < 5; i++) {
        result.push(parseInt(Math.random()*500));
        
    }
    return result;
}
let arr = randArray(500);
console.log(arr);

// task 5 (рекірсія)

//task 8
const time = new Date();
const hour = time.getHours();

if (time >= 23 || time <= 5) {
    console.log("Доброї ночі");
}
else if (time >= 5 && time < 11) {
    console.log("Добрий ранок");
}
else if (time >= 11 && time < 17) {
    console.log("Добрий день");
}
else if (time >= 17 && time < 23) {
    console.log("Добрий вечір");
}