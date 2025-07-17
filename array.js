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



let person = ["hari","shayam","gita","sita"];
console.log(person.push)