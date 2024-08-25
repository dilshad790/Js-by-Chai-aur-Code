let tinderUser={};
tinderUser.id="dil@123";
tinderUser.name="dils11"
tinderUser.loggedInd=false;
console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullnamae:{
        user:{
            firstName:"dilshad",
            lastName:"Alam"
        }
    }
}

console.log(regularUser?.fullnamae?.user);

let obj1={1:"a",2:"b"};
let obj2={3:"c",4:"d"};
let obj3={obj1,obj2}; // concat nahi hoga
console.log(obj3);
let obj4=Object.assign(obj1,obj2); // object2 ka element obj1 me copy ho rha hai
console.log(obj4);
console.log(obj1);

// best practice
let obj5={5:"e",6:"f"}
let obj6=Object.assign({},obj1,obj2,obj5); // empty {} ,me sb assign ho rha hai
console.log(obj6);

let obj7={...obj1,...obj2};
console.log(obj7);

// print all keys 
console.log(Object.keys(obj7)); // return array
// print all values
console.log(Object.values(obj7)); // return array
// print all keys and values
console.log(Object.entries(obj7)); // array of array

// check if object has property or not
console.log(tinderUser.hasOwnProperty('name'));
console.log(tinderUser.hasOwnProperty('id'));
console.log(tinderUser.hasOwnProperty('email'));


