// let i=0;
// let a=10;
// while(a==10){
//     console.log(i);
//     i++;
//     console.log(i);
//     console.log(i);
//     a=50
// }
//===========output=============
//0
//1
//1

// var i=0;
// var a=10;
// while(i<10){
//     console.log(i);
//     i++;
//     break;
// }
//===========output=========
//0

// create table of 5
// var a=5;
// var b=1;
// while(b<=10){
//     result = a*b;
//     console.log(a,"*",b,"=",result);
//     b++;
// }
//=============output==========
// 5 * 1 = 5
// 5 * 2 = 10
// 5 * 3 = 15
// 5 * 4 = 20
// 5 * 5 = 25
// 5 * 6 = 30
// 5 * 7 = 35
// 5 * 8 = 40
// 5 * 9 = 45
// 5 * 10 = 50
// 2**2 bhanyo bhaney power ma buchxa

//user input-- prompt
// npm install prompt-sync
// node loop.js
// const prompt = require("prompt-sync")({sigint: true})
// var a=10
// var b= prompt("enter your name: ")

//Guess the number 
//step
// const prompt = require("prompt-sync")({sigint: true})
// var b= parseInt(prompt("enter your name: "));
// console.log(typeof(b))
const prompt = require("prompt-sync")({sigint: true})
console.log("Please, Guess between 1 to 100");
var sn=50;
while(true){
    var userInput = parseInt(prompt("Enter a number"))
    if(userInput==sn){
        console.log("i think i am right");
        break;
    }
    else if(userInput>sn){
        console.log("Number is high")
    }
    
    else{
        console.log("Number is low")
    }
}