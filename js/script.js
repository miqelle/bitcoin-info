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

