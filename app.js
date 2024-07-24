// 1-savol

// let arr = [1,2,3,4,5,6,7,8,9,10];
// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i] * 2)

// }

// console.log(newArr);


// 2-savol
// 2-savoldi 1 inchi usuli

// let arr = [1,2,3,4,5,6,7,8,9,10];

// arr.reverse()

// console.log(arr);

// 2-savoldi 2 usuli 

// let arr = [1,2,3,4,5,6,7,8,9,10];

// for (let i = arr.length; i >= 0; i--) {
//     console.log(arr[i]);
// }

// 3-savol

// let arr = [-1, -2, -3,4,5,6,7,8,9,10];
// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//         newArr.push(arr[i])
//     }
// }

// console.log(newArr);

// 4-savol

// let arr = [-1, -2, -3,4,5,6,7,8,9,10];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]

// }

// console.log(sum);


// 5-savol

// let arr = [-1, -2, -3,4,5,6,7,8,9,10]

// arr.push(+prompt("Iltimos biror narsa yozing"))

// console.log(arr);



// 6-savol

// let arr = [-1, -2, -3,4,5,6,7,8,9,10]

// arr.pop()

// console.log(arr);


// 7-savol

// let arr = [-1, -2, -3,4,5,6,7,8,9,10]

// arr.shift()

// console.log(arr);


// 8-savol


// let arr = [-1, -2, -3,4,5,6,7,8,9,10]

// arr.unshift(+prompt("Iltimos biror nima yozing"))

// console.log(arr);



// 9-savol


// let arr = [1,2,3,4,5,6,7,8,9,10];

// console.log(arr.indexOf(2))

// 10-savol

// let arr = [1,2,3,4,5,6,7,8,9,10];
// let newArr = []

// for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i])

// }

// console.log(newArr);


// 11-savol

// let arr = [45,1,2,3,4,5,6,7,8,9,10];
// let max = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i]
//     }
// }

// console.log(max);




// 12-savol

// let arr = [45,1,2,3,4,5,6,7,8,9,10];
// let min = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i]
//     }
// }

// console.log(min);


// 13-savol

// let arr = [45, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         sum ++;
//     }
// }

// console.log(sum);


// 14-savol

// let arr = [45, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 1) {
//         sum ++;
//     }
// }

// console.log(sum);


// 15-savol

// let arr = [0, 1, 2, 4, 5, 0, 6, 41, 0, 7, 5, 0, 4, 5, 0]
// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//         newArr.push(arr[i])
//     }

// }

// console.log(newArr);


// 16-savol

// let arr= [1,2,3,4,5,6,7,8,9,0]
// let newArr = []

// for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i], arr[i])

// }

// console.log(newArr);


// 17-savol

// let arr = [1,2,3,4,5,6,7,8,9,10]
// let newArr1 = []
// let newArr2 = []

// let n = arr.length

// let natijalar1 = Math.floor(n / 2)

// for (let i = 0; i < n; i++) {
//     if (i < natijalar1) {
//         newArr1.push(arr[i]);
//     }else{
//         newArr2.push(arr[i]);
//     }
    
// }

// console.log(newArr1);
// console.log(newArr2);





// 18-savol

// let arr = [45, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArr = 1;

// for (let i = 0; i < arr.length; i++) {
//     newArr *= arr[i]

// }

// console.log(newArr);



// 19-savol

// let arr = [45, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//         newArr.push(arr[i])
//     }
// }

// console.log(newArr);



// 20-savol


// let arr = [45, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 1) {
//         newArr.push(arr[i])
//     }
// }

// console.log(newArr);


// 21-savol

// let arr = [1, 'apple', true, 'banana', 42, 'cherry', null, 'date'];
// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "string") {
//         newArr.push(arr[i])
//     }
    
// }

// console.log(newArr);




// 22-savol

// let arr = [1, 'apple', true, 'banana', 42, 'cherry', null, 'date'];
// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number") {
//         newArr.push(arr[i])
//     }
    
// }

// console.log(newArr);


// 23-savol

// let arr = [1, 'apple', true, 'banana', 42, 'cherry', null, 'date'];

// console.log(arr.length);


















