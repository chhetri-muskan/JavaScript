// var = global scope ho jaa ni use hunxa 
// let = let bhaneko local 
// const = change garna mildai na
// let name = "lumbini"
// name = "city"
// console.log(name)
// var college_name="lumbini"
// if(true ){
//     var college_name="city"
//     console.log(college_name);
// }
// console.log(college_name);
//===================output===============
//city
//city



// var college_name="lumbini"
// if(true ){
//     let college_name="city"
//     console.log(college_name);
// }
// console.log(college_name);
//===============output===============
//city
//lumbini




// if(true ){
//     var college_name="lumbini"
//     console.log(college_name);
// }
// if(true){
//     let college_name="city"
//     console.log(college_name);
// }
// console.log(college_name)
///========output=========
//lumbini 
//city
//lumbini



// if(true ){
//     var college_name="lumbini"
//     console.log(college_name);
// }
// if(true){
//     var college_name="city"
//     console.log(college_name);
// }
// console.log(college_name)
//===========output===========
//lumbini
//city
//city




// if(true ){
//     var college_name="lumbini"
//     console.log(college_name);
// }
// if(true){
//     var college_name="city"
//     console.log(college_name);
//     if(true){
//         var college_name="college";
//         console.log(college_name);
//     }
// }
// console.log(college_name)
// =================output===========
// lumbini
// city
// college
// college



// if(true ){
//     var college_name="lumbini"
//     console.log(college_name);
// }
// if(true){
//     let college_name="city"
//     console.log(college_name);
//     if(true){
//         console.log(college_name);
//     }
// }
// console.log(college_name)
// ==============output========
// lumbini
// city
// city
// lumbini


// let person = ["hari","shayam","gita","sita"];
// console.log(typeof person); //oject
// console.log(person.at(-1)); //sita
// console.log(person.at(-4)); //hari
// console.log(person.at(1)); //shayam
// console.log(person.at(0)); //hari
// console.log(person.indexOf("hari")) // 0


// push method
// let person = ["hari","shayam","gita","sita"];
// console.log(person.push("suraj")) // gives output = 5
//                                                     [ 'hari', 'shayam', 'gita', 'sita', 'suraj' ]
// console.log(person);


// person.push("suraj") // gives output = [ 'hari', 'shayam', 'gita', 'sita', 'suraj' ]



//pop method
// let person = ["hari","shayam","gita","sita"];
// console.log(person.pop("sita"));
// console.log(person);
// ==============output===========
// sita
// [ 'hari', 'shayam', 'gita' ]





// let person = ["hari","shayam","gita","sita"];
// person[1]="ram"
// console.log(person);
// ==============output=========
// [ 'hari', 'ram', 'gita', 'sita' ]




const prompt = require("prompt-sync")({sigint: true})
let todos=[];
while(true){
    console.log("1.Add 2.View 3.Edit 4.Remove list");
    choice = prompt("Enter your choice");
    if(choice=="1"){
        let task = prompt("Enter task: ");
        todos.push(task);
        console.log("Task Added:",task); 
    }
    else if(choice=="2"){
        console.log(todos);
    }
    else if(choice=="3"){
        let index = prompt("Enter task number to edit:");
        let values = prompt("Enter task number to edit:");
        todos[index]= values;
    }
    else if(choice=="4"){
       todos.pop();
       console.log("Last task removed");
    }
    else{
        console.log("invalid choice");
    }
}