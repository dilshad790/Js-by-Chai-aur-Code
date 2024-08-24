// primitive-stack me store hota -copy bnta hai
// non-primitive-heap me store hota hai wov refrece type

let userId="dilshad123";
let userName="dilshadalam";
userId=userName;

// non-primitive
let user1={
    upi:"dislf@ybl",
    name:"Dil"
}

let user2={
    upi:"avsd@ybl",
    name:"abc"
}

user1.name=user2.name;
console.log(user1.name);
console.log(user2.name);