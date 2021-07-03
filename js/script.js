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
    document.write("<h1><img src='https://resizeimage.net/viewimg/o3usLSqqawM3zJng/Qi3KP/bitcoin.jpg'><h1>"); 
}
