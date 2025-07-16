// //var muskan="thapa"; valid
// //var gmail@="muskan@gmail.com" invalid
// var college = "lumbini"
// console.log(college)
// console.log(typeof(college))

// //typeof operator data type dinxa

// var college = "lumbini city"
// console.log(typeof (college))
// var isStudent = true;
// console.log(typeof(isStudent))
// var tax = null;
// console.log(typeof(tax))
// var num = 45;
// console.log(typeof(num))
// let x
// console.log(typeof(x))

// //type casting

// let a=5
// let b="29"
// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)

// //programmer le change

// var m="10" //string
// console.log(typeof m)
// // var n=Number(m)
// // console.log(typeof(n))
// // var n=parseInt(m) ---->number ma convert gardinxa tei ni integer
// var n=parseFloat(m)
// console.log(n)
// console.log(typeof(n))
// var str="abc"
// // var num=parseInt(str)
// // console.log(num) // it gives NaN which means it is (not a number)
// var q=1
// console.log(str+q) //+ garda abc1 diyo - garda NaN dinxa

// let j=65
// var r=j>=60 ? "pass" : "fail"
// console.log(r)

// //WAP for driving >18 yrs old and license
// var age=20
// var license = true
// if(age>18 && license ==true){
//     console.log("He/She is eligiable for driving")
// }
// else{
//     console.log("He/She is not eligiable for driving")
// }

// //WAP to check wheather the number is negative,positive or zero
// var num=23
// if(num==0){
//     console.log("Number is zero")
// }
// else if(num>0){
//     console.log("Number is positive")
// }
// else{
//     console.log("Number is negative")
// }

// // switch statement 
// var day = "monday";
// switch(day){
//     case "sunday":
//     console.log("Today is sunday");
//     break;
//     case "monday":
//     console.log("today is monday");
//     break;
// }

//question
var areaofshapes = "circle"; 
let k = 2;                  
let l = 5;                   
let r = 4;                   
let result;

switch (areaofshapes) {
    case "square":
        result = k * k;
        console.log(result); 
        break;
    case "rectangle":
        result = k * l;
        console.log(result); 
        break;
    case "circle":
        result = 3.14 * r * r;
        console.log(result); 
        break;
    default:
        console.log("none"); 
}