var name_ans = prompt("Tell me your name.");
var number = prompt("Give me a number.");
var number2 = prompt("Give me another number.");

function greeting(hello) {
    return "You are going to have a wonderful day," + hello;
}
document.write(greeting(name_ans));


function bothnumber(n1,n2){
    var sum = n1 + n2;
    return "By the way, the sum of your numbers is " + sum
}

var temp_output;

temp_output = bothnumber(4,5);
console.log(temp_output);