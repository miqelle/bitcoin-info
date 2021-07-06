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

    

