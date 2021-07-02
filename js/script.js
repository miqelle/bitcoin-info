function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "33,394.90") {
      alert("Great job that is correct!");
      return false;
    }
  }
