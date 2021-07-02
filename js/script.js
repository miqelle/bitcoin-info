function askQuestion(){
    var luckyNumberfound = false;
    while(luckyNumberfound ==false){
        var number = prompt("What is considered a lucky number?");
        if(number == "7"){
            alert("That's the lucky number!");
            luckyNumberfound = true;
        }
        else{
            alert("That's not a lucky number");
        }
    
    }
}    

askQuestion();

var amount = prompt("How many Bitcoins would you like?");
for(let i = 0; i < amount; i++){
    document.write("<img src='https://pbs.twimg.com/profile_images/586088541232431104/C7br1s6r_400x400.png'>"); 
}