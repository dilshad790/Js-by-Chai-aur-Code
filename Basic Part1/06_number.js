let balance=100;
let balance2=new Number(200);
// console.log(balance);
// console.log(balance2);
// console.log(typeof balance);
// console.log(typeof balance2);

// console.log(balance.toString());
// console.log(balance2.toString());
// console.log(typeof balance);
// console.log(typeof balance2);

// balance2=balance2.toString();
// console.log(typeof balance2);

// to fixed no. after decimal
const num=123.8966;
console.log(num.toFixed(2)); // 123.90
const num2=23.8966;
console.log(num2.toFixed(2)); // 23.90


// to precision
let num3=123.8966;
console.log(num3.toPrecision(3)); // 
num3=23.8966;
console.log(num3.toPrecision(3));

// max-safe-integer
// toLocalString
// Math.random
let min=10;
let max=20;
console.log((Math.floor(Math.random()*max-min+1))+min);

// epsilon
let x=0.2;
let y=0.3;
let z=0.1;
console.log((x+y)===z);