// Get the form element and submit button
const myForm = document.getElementById("myForm");
const submitBtn = document.getElementById("submit");

// Add an event listener for form submission
myForm.addEventListener("submit", function (event) {
  // Prevent the form from submitting
  event.preventDefault();
  
  // Get the input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Validate the input values
  if (name === "") {
    alert("Please enter a username.");
    return;
  }

  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (password === "") {
    alert("Please enter a password.");
    return;
  }

  // Submit the form if validation passes
  window.location.href = "Login.html";
});

// Validate email using regular expression
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
