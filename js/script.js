function myFunction() {
    var mylist = document.getElementById("myList");
    document.getElementById("demo").value = mylist.options[mylist.selectedIndex].text;
  }