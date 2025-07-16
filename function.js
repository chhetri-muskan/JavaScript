// function hello(){
// }
// var a =4
// var b=2
// var sum=a+b
// console.log(sum)



// function hello(a,b){
//     console.log(a+b)
// }
// hello(4,5)
// hello(33,45)



//wap to greet user with his/her name pass name as parameter to the function
// function greet(a){
//     console.log("Hello Mr.",a,"Namaste")
// }
// greet("Muskan")


//wap for a shop product (price,quality)
// function shop(a,b){
//     console.log("price is:",a,"and","quality is:",b)
// }
// shop(850,"a1 quality")


//wap to reverse a string using function
// function string(reverse){
//     var reverse_str=""
//     for(let i of reverse){
//     reverse_str=i+reverse_str
//  }
// console.log(reverse_str)
// }
// string("muskan")


//palindrome
// function string(reverse){
//      var reverse_str=""
//      for(let i of reverse){
//      reverse_str=i+reverse_str
//     }
// console.log(reverse_str)
// if(reverse==reverse_str){
//     console.log("it is palindrome")
// }
// else{
//     console.log("it is not palindrome")
// }
// }
// string("Muskan")




// function add(a,b){
//     return a+b
// }
// // we can also do console.log(add(4,7))
// x=add(4,7)
// console.log(x)


// function add(a,b){
//     return b
//     return a
// }
// console.log(add(4,7))

// function add(a,b){
//     console.log("hi")     // gives output ===> hi
//     return b                                   7
// }
// console.log(add(4,7))



const prompt = require("prompt-sync")({sigint: true})
function addition(a,b){
    return(a+b)
}
function subtraction(a,b){
    return(a-b)
}
function multiplication(a,b){
    return(a*b)
}
function division(a,b){
    return(a/b)
}
while(true){
    console.log("1.Add 2.Sub 3.Mult 4.Div")
    userInput = parseInt(prompt("Enter a number"))
    if(userInput==1){
        console.log(addition(2,3)) 
    }
    else if(userInput==2){
        console.log(subtraction(5,3))
    }
    else if(userInput==3){
        console.log(multiplication(9,3))
    }
    else if(userInput==4){
       console.log(division(6,2)) 
    }
}