const form = document.querySelector('#myForm');
const emailInput = form.querySelector('#email');
const passwordInput = form.querySelector('#password');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  if (emailInput.value === 'admin@gmail.com' && passwordInput.value === 'admin') {
    window.location.href = 'template/index.html';
  } else {
    alert('Invalid email or password');
  }
});