// const user={
//     name:"Dishad",
//     123:"10",
//     "full name":"Dilshad Alam"

// }

// console.log(typeof user.name); // name key is taken as string 
// // console.log(typeof user.123); // sytaxError
// console.log(typeof user[123]);  
// // bset practice [""] to access properties of an object
// console.log(user["full name"]);
// console.log(user["name"]);


// task take a symbol and add it in  object and use as a key
// const mysymbol=Symbol("Key1");
// const user2={
//     name:"Dilshad",
//     [mysymbol]:"mykey1",
// }
// console.log(user2["name"]);
// // console.log(user2["mysymbol"]); // udefined
// // correct method
// console.log(user2[mysymbol]);
// console.log(typeof user2[mysymbol]);
// console.log(user2); 
// console.log(mysymbol);
// console.log(typeof mysymbol);



// change value of property of object
// let user3={
//     "email":"dislhad@gmail.com",
//     "name":"Dishad"
// }
// user3["name"]="Alam";
// user3.email="dilshadchagpt@gmail.com"
// console.log(user3["email"]);

// freeze object show that none one can change its value
// Object.freeze(user3); 
// user3["name"]="awan"; // name will not changed
// console.log(user3.name); 

// user3.greeting=function ()
// {
//     console.log("Hello Js User");
    
// }
// user3.greetingtwo=function()
// {
//     console.log(`Hello Js User two ${this.name}`)
// }

// console.log(user3.greeting());
// console.log(user3.greetingtwo());


