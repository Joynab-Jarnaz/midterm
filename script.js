document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const result = document.getElementById('registrationResult');
    const displayName = document.getElementById('displayName');
    const displayAddress = document.getElementById('displayAddress');
    const displayPhone = document.getElementById('displayPhone');
    const displayEmail = document.getElementById('displayEmail');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent form submission
  
      // Get form values
      const name = document.getElementById('name').value;
      const address = document.getElementById('address').value;
      const phone = document.getElementById('phone').value;
      const email = document.getElementById('email').value;
  
      // Display the entered information
      displayName.textContent = name;
      displayAddress.textContent = address;
      displayPhone.textContent = phone;
      displayEmail.textContent = email;
  
      // Hide the form and show the result
      form.style.display = 'none';
      result.style.display = 'block';
    });
  });
  