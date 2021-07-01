var bitQuestion = prompt("Welcome to Bitcoin Info, how old are you?");
console.log(bitQuestion);

if (bitQuestion >= 18){
    alert("You have been granted access!");
}
else if (bitQuestion <=17){
alert("Welcome, I will teach you about bitcoin");
}
else {
    alert("You're in the right place");
}