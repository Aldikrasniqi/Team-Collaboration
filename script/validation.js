document.getElementById("submit").addEventListener("click", function (event) {
  event.preventDefault();
  validateForm();
});

function validateForm() {
  // input values storing in a variable
  var name = document.forms["myForm"]["name"].value;
  var email = document.forms["myForm"]["email"].value;
  var subject = document.forms["myForm"]["subject"].value;
  var message = document.forms["myForm"]["message"].value;
  // regex validation
  var emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (name == "") {
        alert("Plotesoni Fushen Ju lutem");
        return false;
      } else if (email == "" || !emailRegex.test(email)) {
        document.getElementById("emailError").style.display = "inline";
        return false;
      } else {
        document.getElementById("emailError").style.display = "none";
      }
      
      if (subject == "") {
        alert("Plotesoni fushen e subjectit ju lutem");
        return false;
      } else if (message == "") {
        alert("Message must be filled out");
        return false;
      } else {
        // submit the form
        document.getElementById("myForm").reset();
        return true;
      }
}
