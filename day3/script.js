
// const obj= {
//     id:1,
//     name: "guest"
// }
// console.log(obj.loc);
// obj.loc="hyd"

// console.log(obj);


// const users =[
//     {
//     id:1,
//     name : "user1",
//     loc : "hyd"
//     },
//     {
//         id:2,
//         name:"user2",
//         loc:"hyd"
//     }
// ]
// console.log(users[0].name);

// function myFun() {
//     // console.log(-1);
//     return -1
        
// }
// console.log(myFun);
// console.log(myFun());

// function add(num1, num2){
//     return num1+num2
// }
// console.log(add(32,2));

// function add(num1, num2){
//     return num1-num2
// }
// console.log(add(36, 6));

// const myFun=function add(num1,num2){
//     return num1+num2
// }
// console.log(myFun(33,3));

// Task: 1 
const doMath = (num1, num2, op) => {
    switch (op) {
        case "+":
            console.log(`The addition of ${num1} and ${num2} is ${num1 + num2} `);
            break;
        case "-":
            console.log(`The subtraction of ${num1} and ${num2} is ${num1 - num2} `);
            break;
        case "*":
            console.log(`The multiplication of ${num1} and ${num2} is ${num1 * num2} `);
            break;
        case "/":
            console.log(`The division of ${num1} and ${num2} is ${num1 / num2} `);
            break;
        case "%":
            console.log(`The reminder of ${num1} and ${num2} is ${num1 % num2} `);
            break;
        case "**":
            console.log(`The power of ${num1} and ${num2} is ${num1 ** num2} `);
            break;
        default:
            console.log("Please pass a Valid Input");
            break;
    }
}

doMath(2, 3, "*")