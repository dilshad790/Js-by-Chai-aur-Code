// let arr=[1,2,3,4,5];
// let arr2=[6,7,8,9,10];
// let arr3=[...arr,...arr2]
// console.log(arr3);
// arr3=arr.concat(arr2);
// console.log();

// let arr4=[10,11,12,13,14,[15,16,17],[22,23,34]];
// console.log(arr4.flat(0)); // provide number of nesting array
// console.log(arr4.flat(1)); // provide number of nesting array

// // isfunction 
// console.log(Array.isArray(arr)); // check array or not
// console.log(Array.from("Hello World")); // convert into an array
// console.log(Array.from({name:"Dilshad"})); // interesting


// let arr=[2,3,4,5,6];
// let arr2=arr;
// console.log(arr2);
// arr2.push(23);
// console.log(arr2);
// console.log(arr);

// console.log(null==undefined); // intresting

let arr=[2,3,4,5,6];
// console.log(arr[0]);
// console.log(arr[-1]);
// console.log(arr[2+2]);
// console.log(arr.at(2))
// console.log(arr.at(-1)); // accessed last index element
// console.log(typeof arr);


arr=[2,3,{name:"Dilshad"},function func(){console.log("hello");
}]
// console.log(arr[2]);
// console.log(arr[1]);
// console.log(arr[3]);
// console.log(arr[10]);
// arr[10]=5;
// arr.age=20;
// for(let i=0; i<arr.length; i++)
// {
//     console.log(i," ",arr[i]);
    
// }

// for(let key in arr)
// {
//     console.log(arr[key]);
    
// }

// console.log([]+1); // treated as string
// console.log([1] + 1 );
// console.log([1,2] + 1);

// console.log([]==[]);

// Task
// Create an array styles with items “Jazz” and “Blues”.
// Append “Rock-n-Roll” to the end.
// Replace the value in the middle with “Classics”. Your code for finding the middle value should work for any arrays with odd length.
// Strip off the first value of the array and show it.
// Prepend Rap and Reggae to the array.

// arr=["Jazz","Blues"];
// arr.push("Rock-n-Roll");
// let e=arr.length-1;
// let s=0;
// let mid=(s+e)/2;
// arr[mid]="classic";
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.unshift("Rap");
// arr.unshift("Reggage");
// console.log(arr);

// Task
// What is the result? Why?

//  arr = ["a", "b"];

// arr.push(function() {
//  console.log(this);
 
// });

// arr[2](); // ?
// ans - it will print array

// task
arr.length=0;
arr=[]
// while(true)
// {
//     let num=prompt("Enter number only");
//     if(num=="" || num==null || isNaN(num))
//         break;
//     else{
//         arr.push(num);
//     }
// }
// let sum=0;

// arr.push(+"10")
// arr.push(+10)
// arr.push(+'10')
// for(let key of arr)
// sum+=key;
// console.log(arr);
// console.log(sum);

// getmaxSum of subarray
arr.legth=0;
// arr=[-1, 2, 3, -9];
arr=[2, -1, 2, 3, -9];
// arr=[-1, 2, 3, -9, 11];
// arr=[-1, -2, -3];

let sum=0;
let currsum=0;
for(let key of arr)
{
    currsum+=key;
    if(currsum>sum)
        sum=currsum;
    if(currsum<0)
        currsum=0;
}
console.log(sum);