document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (username && password) {
      alert(`Welcome, ${username}!`);
    } else {
      alert('Please fill in all fields.');
    }
  });

  document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting
  
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
  
    if (fullName && email) {
      alert(`Thank you for registering, ${fullName}!`);
    } else {
      alert('Please fill in all required fields.');
    }
  });