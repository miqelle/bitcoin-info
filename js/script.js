function myFunction() {
    var mylist = document.getElementById("myList");
    document.getElementById("demo").value = mylist.options[mylist.selectedIndex].text;
  }

  var collective= true;
  var question

  while(collective==true){
    question = prompt("Do you know the price of 1 bitcoin?")
    if (question =="33,448.90") {collective = false;} 
  }

function validate(){

//Create Fields Array

var fields = new Array;

var fields = [document.getElementById('username'),document.getElementById('pass')];

//Create Variable to Keep Track of Errors

var err = 0;



//Start Validation Loop

for (i=0;i<fields.length;i++){

//Check Fields in Array to Make Sure they are not Empty

if (fields[i].value == ""){

err++;

}

}//Close Loop

//Check That There are No Errors

if (err === 0){

//Submit Form

document.myform.submit();

}else {

//If there are errors, return false and alert the user

alert("Please Fill Out All Of The Fields");

return false;

}

}


