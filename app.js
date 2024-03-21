//  =====================Question No 1==========
//  let a = 6;
//  let b = 7;
//  let result = a++ + b++ + ++a - ++b - ++a * a + b + a-- + --b * a;
//  //            6 +   7  +  8 -   9  -  9  *  9 + 9 + 9  + 8 * 8;
// //             6 +   7  +  8 -   9  -  81 + 9  + 9  + 64;
// //             12 - 81  + 18 + 64;
// //             -69 + 82;
// //               13 
// console.log(result)
//  =====================Question No 2==========
// let num = +prompt("Enter Your Number");
// if(num%5 === 0){
//     console.log(num + " is  multiple of 5");
// }
// else{
//     console.log(num + " is not multiple of 5");
// }
//  =====================Question No 3==========
// let score = +prompt("Enter Your Score");
// if(score >= 80 && score <=100){
//     console.log("Your Grade is A1 " + score + "%");
// }else if(score >= 70 && score <=79){
//     console.log("Your Grade is A " + score + "%");    
// }else if(score >= 60 && score <=69){
//     console.log("Your Grade is B " + score + "%");    
// }else if(score >= 50 && score <=59){
//     console.log("Your Grade is C " + score + "%");    
// }else{
//     console.log("Invalid Number")
// }
//  =====================Question No 4==========
// let name1 = prompt("Enter Your Name");
// let math = +prompt("Enter Your math Number");
// let phyics = +prompt("Enter Your physics Number");
// let chemistry = +prompt("Enter Your chemistry Number");
// let urdu = +prompt("Enter Your urdu Number");
// let eng = +prompt("Enter Your english Number");
// let total = 500;
// let obtnum = math+phyics+chemistry+urdu+eng;
// let percntage = (obtnum*100)/total;
// if(percntage>=80 && percntage<=100){
//     alert(name1  + " Your Percentage is " + percntage + "%" + "\n" + "Your Grade is A1");
// }else if(percntage>=70 && percntage<=79){
//     alert(name1  + " Your Percentage is " + percntage + "%" + "\n" + "Your Grade is A");
// }else if(percntage>=60 && percntage<=69){
//     alert(name1  + " Your Percentage is " + percntage + "%" + "\n" + "Your Grade is B");
// }else if(percntage>=50 && percntage<=59){
//     alert(name1  + " Your Percentage is " + percntage + "%" + "\n" + "Your Grade is C");
// }else if(percntage>=40 && percntage<=49){
//     alert(name1  + " Your Percentage is " + percntage + "%" + "\n" + "Your Grade is D");
// }else{
//     alert("You are Fail");
// }  